(function () {
  'use strict';

  var DATA = window.PARKING_DATA;
  if (!DATA) return;

  var map = null;
  var markersById = {};
  var activeFilter = 'all';
  var activePhotoId = DATA.mapPhotos && DATA.mapPhotos[0] ? DATA.mapPhotos[0].id : '';
  var activeRouteId = DATA.walkGuides && DATA.walkGuides[0] ? DATA.walkGuides[0].id : '';
  var toastTimer = null;

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2400);
  }

  function copyText(text) {
    if (!text) return;
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text).then(function () {
        showToast('Đã sao chép địa chỉ!');
      }).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Đã sao chép địa chỉ!');
    } catch (e) {
      showToast('Không thể sao chép tự động, bạn chọn tay nhé.');
    }
  }

  function matchesFilter(spot, filter) {
    if (filter === 'all') return true;
    if (filter === 'recommended') return Boolean(spot.recommended);
    if (filter === 'motorbike') return spot.vehicles.indexOf('motorbike') !== -1;
    if (filter === 'car') return spot.vehicles.indexOf('car') !== -1;
    if (filter === 'closest') return spot.distanceMeters <= 200;
    return true;
  }

  function renderQuickPicks() {
    var grid = document.getElementById('quick-grid');
    if (!grid) return;

    grid.innerHTML = DATA.quickPicks.map(function (item) {
      return (
        '<article class="quick-card">' +
          '<span class="quick-badge">' + escapeHtml(item.badge) + '</span>' +
          '<h3>' + escapeHtml(item.title) + '</h3>' +
          '<p>' + escapeHtml(item.desc) + '</p>' +
          '<button type="button" class="btn btn--sm btn--outline" data-focus-spot="' + escapeHtml(item.targetSpotId) + '">' +
            escapeHtml(item.cta) +
          '</button>' +
        '</article>'
      );
    }).join('');
  }

  function renderPhotoGallery() {
    var tabsEl = document.getElementById('photo-tabs');
    if (!tabsEl || !Array.isArray(DATA.mapPhotos) || !DATA.mapPhotos.length) return;

    tabsEl.innerHTML = DATA.mapPhotos.map(function (p) {
      var isAct = p.id === activePhotoId;
      return (
        '<button type="button" class="tab-btn' + (isAct ? ' is-active' : '') + '" data-photo-id="' + escapeHtml(p.id) + '" role="tab" aria-selected="' + (isAct ? 'true' : 'false') + '">' +
          escapeHtml(p.tabLabel) +
        '</button>'
      );
    }).join('');

    var current = DATA.mapPhotos.find(function (p) { return p.id === activePhotoId; }) || DATA.mapPhotos[0];
    var img = document.getElementById('active-photo-img');
    var title = document.getElementById('active-photo-title');
    var desc = document.getElementById('active-photo-desc');
    if (img) {
      img.src = current.src;
      img.alt = current.title;
    }
    if (title) title.textContent = current.title;
    if (desc) desc.textContent = current.desc;
  }

  function openLightbox() {
    var lb = document.getElementById('lightbox');
    var lbImg = document.getElementById('lightbox-img');
    var lbCap = document.getElementById('lightbox-cap');
    var current = DATA.mapPhotos.find(function (p) { return p.id === activePhotoId; }) || DATA.mapPhotos[0];
    if (!lb || !lbImg || !current) return;

    lbImg.src = current.src;
    lbImg.alt = current.title;
    if (lbCap) lbCap.textContent = current.title + ' — ' + current.desc;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
  }

  function renderWalkGuides() {
    var tabsEl = document.getElementById('route-tabs');
    var panelEl = document.getElementById('route-panel');
    if (!tabsEl || !panelEl || !Array.isArray(DATA.walkGuides) || !DATA.walkGuides.length) return;

    tabsEl.innerHTML = DATA.walkGuides.map(function (g) {
      var isAct = g.id === activeRouteId;
      return (
        '<button type="button" class="tab-btn' + (isAct ? ' is-active' : '') + '" data-route-id="' + escapeHtml(g.id) + '" role="tab" aria-selected="' + (isAct ? 'true' : 'false') + '">' +
          escapeHtml(g.tabLabel) +
        '</button>'
      );
    }).join('');

    var guide = DATA.walkGuides.find(function (g) { return g.id === activeRouteId; }) || DATA.walkGuides[0];
    var stepsHtml = guide.steps.map(function (st, idx) {
      return (
        '<li class="route-step">' +
          '<span class="route-step-num">' + (idx + 1) + '</span>' +
          '<div>' +
            '<h3>' + escapeHtml(st.title) + '</h3>' +
            '<p>' + escapeHtml(st.detail) + '</p>' +
          '</div>' +
        '</li>'
      );
    }).join('');

    panelEl.innerHTML =
      '<div class="route-header">' +
        '<span class="route-badge">' + escapeHtml(guide.badge) + '</span>' +
        '<p class="route-summary">' + escapeHtml(guide.summary) + '</p>' +
      '</div>' +
      '<ol class="route-steps">' + stepsHtml + '</ol>' +
      '<a class="btn btn--navy" href="' + escapeHtml(guide.mapsUrl) + '" target="_blank" rel="noopener noreferrer">' +
        escapeHtml(guide.mapsCta) +
      '</a>';
  }

  function renderSpots() {
    var grid = document.getElementById('spots-grid');
    var summary = document.getElementById('filter-summary');
    if (!grid) return;

    var visible = DATA.spots.filter(function (s) {
      return matchesFilter(s, activeFilter);
    });

    if (summary) {
      summary.textContent = 'Đang hiển thị ' + visible.length + ' / ' + DATA.spots.length + ' địa điểm phù hợp.';
    }

    grid.innerHTML = visible.map(function (spot) {
      var distText = spot.distanceMeters === 0
        ? 'Ngay tại trường (0m)'
        : '~' + spot.distanceMeters + 'm · ' + spot.walkTime;

      var tagsHtml = spot.vehicleLabels.map(function (v) {
        return '<span class="tag">' + escapeHtml(v) + '</span>';
      }).join('');

      var prosHtml = spot.pros.map(function (p) {
        return '<li>' + escapeHtml(p) + '</li>';
      }).join('');

      return (
        '<article class="spot-card' + (spot.recommended ? ' is-recommended' : '') + '" id="spot-' + escapeHtml(spot.id) + '" data-spot-id="' + escapeHtml(spot.id) + '">' +
          '<div class="spot-top">' +
            '<span class="spot-num spot-num--' + escapeHtml(spot.category) + '">' + spot.order + '</span>' +
            '<div class="spot-title-wrap">' +
              '<h3 class="spot-title">' + escapeHtml(spot.name) + '</h3>' +
            '</div>' +
            '<span class="spot-badge spot-badge--' + escapeHtml(spot.category) + '">' + escapeHtml(spot.badge) + '</span>' +
          '</div>' +

          '<div class="spot-tags">' +
            '<span class="tag tag--dist">' + escapeHtml(distText) + '</span>' +
            tagsHtml +
            (spot.covered ? '<span class="tag">Có mái che / Hầm</span>' : '') +
          '</div>' +

          '<div class="spot-meta">' +
            '<div><strong>Địa chỉ:</strong> ' + escapeHtml(spot.address) + '</div>' +
            '<div><strong>Giờ mở cửa:</strong> ' + escapeHtml(spot.hours) + '</div>' +
            '<div><strong>Chi phí tham khảo:</strong> ' + escapeHtml(spot.priceNote) + '</div>' +
          '</div>' +

          '<ul class="spot-pros">' + prosHtml + '</ul>' +

          '<p class="spot-note"><strong>Lưu ý:</strong> ' + escapeHtml(spot.notes) + '</p>' +

          '<div class="spot-actions">' +
            '<a class="btn btn--sm btn--navy" href="' + escapeHtml(spot.mapsUrl) + '" target="_blank" rel="noopener noreferrer">Chỉ đường Maps</a>' +
            '<button type="button" class="btn btn--sm btn--outline" data-map-focus="' + escapeHtml(spot.id) + '">Xem trên bản đồ</button>' +
            '<button type="button" class="btn btn--sm btn--outline" data-copy="' + escapeHtml(spot.address) + '">Sao chép</button>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function renderTips() {
    var grid = document.getElementById('tips-grid');
    if (!grid) return;

    grid.innerHTML = DATA.tips.map(function (tip) {
      return (
        '<article class="tip-card">' +
          '<span class="tip-num">' + escapeHtml(tip.num) + '</span>' +
          '<div>' +
            '<h3>' + escapeHtml(tip.title) + '</h3>' +
            '<p>' + escapeHtml(tip.text) + '</p>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function highlightCard(spotId, shouldScroll) {
    document.querySelectorAll('.spot-card.is-highlighted').forEach(function (el) {
      el.classList.remove('is-highlighted');
    });
    var card = document.getElementById('spot-' + spotId);
    if (!card && activeFilter !== 'all') {
      setFilter('all');
      card = document.getElementById('spot-' + spotId);
    }
    if (card) {
      card.classList.add('is-highlighted');
      if (shouldScroll) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function focusOnMap(spotId, scrollToMap) {
    var spot = DATA.spots.find(function (s) { return s.id === spotId; });
    if (!spot) return;

    highlightCard(spotId, false);
    if (scrollToMap) {
      var mapEl = document.getElementById('parking-map');
      if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (map && markersById[spotId]) {
      map.flyTo([spot.lat, spot.lng], 17, { duration: 0.6 });
      markersById[spotId].openPopup();
    }
  }

  function fitAllMarkers() {
    if (!map || typeof L === 'undefined') return;
    var coords = [[DATA.destination.lat, DATA.destination.lng]].concat(
      DATA.spots.map(function (s) { return [s.lat, s.lng]; })
    );
    map.fitBounds(coords, { padding: [36, 36], maxZoom: 16 });
  }

  function initMap() {
    var mapEl = document.getElementById('parking-map');
    if (!mapEl) return;

    if (typeof L === 'undefined') {
      mapEl.innerHTML = '<div class="map-fallback">Không tải được bản đồ tương tác (kiểm tra kết nối mạng). Bạn vẫn có thể xem ảnh chụp Google Maps ở phía trên và bấm nút <strong>Chỉ đường Maps</strong> trên từng thẻ.</div>';
      return;
    }

    var dest = DATA.destination;
    map = L.map(mapEl, {
      scrollWheelZoom: false
    }).setView([dest.lat, dest.lng], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.circle([dest.lat, dest.lng], {
      radius: 350,
      color: '#1e4282',
      weight: 1.5,
      dashArray: '6 6',
      fillColor: '#38bdf8',
      fillOpacity: 0.08
    }).addTo(map);

    if (Array.isArray(DATA.walkingPolylines)) {
      DATA.walkingPolylines.forEach(function (route) {
        L.polyline(route.points, {
          color: route.color,
          weight: 4,
          dashArray: '8 8',
          opacity: 0.9
        }).addTo(map);
      });
    }

    var destIcon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: '<div class="custom-pin custom-pin--hcmus"><span>★</span></div>',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -28]
    });

    var destMarker = L.marker([dest.lat, dest.lng], { icon: destIcon, zIndexOffset: 500 })
      .addTo(map)
      .bindPopup(
        '<p class="popup-title">Đích đến: ' + escapeHtml(dest.name) + '</p>' +
        '<p class="popup-meta">' + escapeHtml(dest.address) + '<br><em>Không nhận gửi xe trong trường ngày lễ</em></p>' +
        '<a class="popup-link" href="' + escapeHtml(dest.mapsUrl) + '" target="_blank" rel="noopener noreferrer">Mở Google Maps cổng trường &rarr;</a>'
      );
    markersById['destination'] = destMarker;

    DATA.spots.forEach(function (spot) {
      var icon = L.divIcon({
        className: 'custom-pin-wrapper',
        html: '<div class="custom-pin custom-pin--' + escapeHtml(spot.category) + '"><span>' + spot.order + '</span></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -28]
      });

      var popupHtml =
        '<p class="popup-title">' + spot.order + '. ' + escapeHtml(spot.name) + '</p>' +
        '<p class="popup-meta">' +
          escapeHtml(spot.distanceMeters === 0 ? 'Ngay tại trường' : '~' + spot.distanceMeters + 'm · ' + spot.walkTime) +
          '<br>' + escapeHtml(spot.vehicleLabels.join(' · ')) +
        '</p>' +
        '<a class="popup-link" href="' + escapeHtml(spot.mapsUrl) + '" target="_blank" rel="noopener noreferrer">Mở chỉ đường Google Maps &rarr;</a>';

      var marker = L.marker([spot.lat, spot.lng], { icon: icon })
        .addTo(map)
        .bindPopup(popupHtml);

      marker.on('click', function () {
        highlightCard(spot.id, false);
      });

      markersById[spot.id] = marker;
    });

    fitAllMarkers();
  }

  function setFilter(filter) {
    activeFilter = filter;
    document.querySelectorAll('.filter-chip').forEach(function (btn) {
      var isActive = btn.getAttribute('data-filter') === filter;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    renderSpots();
  }

  function bindEvents() {
    document.addEventListener('click', function (e) {
      var copyBtn = e.target.closest('[data-copy]');
      if (copyBtn) {
        copyText(copyBtn.getAttribute('data-copy'));
        return;
      }

      var photoBtn = e.target.closest('[data-photo-id]');
      if (photoBtn) {
        activePhotoId = photoBtn.getAttribute('data-photo-id');
        renderPhotoGallery();
        return;
      }

      var routeBtn = e.target.closest('[data-route-id]');
      if (routeBtn) {
        activeRouteId = routeBtn.getAttribute('data-route-id');
        renderWalkGuides();
        return;
      }

      var filterBtn = e.target.closest('[data-filter]');
      if (filterBtn) {
        setFilter(filterBtn.getAttribute('data-filter'));
        return;
      }

      var mapFocusBtn = e.target.closest('[data-map-focus]');
      if (mapFocusBtn) {
        focusOnMap(mapFocusBtn.getAttribute('data-map-focus'), true);
        return;
      }

      var focusSpotBtn = e.target.closest('[data-focus-spot]');
      if (focusSpotBtn) {
        var spotId = focusSpotBtn.getAttribute('data-focus-spot');
        if (spotId === 'destination') {
          var mapEl = document.getElementById('parking-map');
          if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (map && markersById['destination']) {
            map.flyTo([DATA.destination.lat, DATA.destination.lng], 17, { duration: 0.6 });
            markersById['destination'].openPopup();
          }
          return;
        }
        highlightCard(spotId, true);
        if (map && markersById[spotId]) {
          var spot = DATA.spots.find(function (s) { return s.id === spotId; });
          if (spot) {
            map.setView([spot.lat, spot.lng], 17);
            markersById[spotId].openPopup();
          }
        }
      }
    });

    var photoTrigger = document.getElementById('photo-trigger');
    if (photoTrigger) photoTrigger.addEventListener('click', openLightbox);

    var lbClose = document.getElementById('lightbox-close');
    if (lbClose) lbClose.addEventListener('click', closeLightbox);

    var lb = document.getElementById('lightbox');
    if (lb) {
      lb.addEventListener('click', function (e) {
        if (e.target === lb) closeLightbox();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });

    var resetBtn = document.getElementById('btn-reset-map');
    if (resetBtn) {
      resetBtn.addEventListener('click', fitAllMarkers);
    }
  }

  function init() {
    renderQuickPicks();
    renderPhotoGallery();
    renderWalkGuides();
    renderSpots();
    renderTips();
    bindEvents();
    initMap();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
