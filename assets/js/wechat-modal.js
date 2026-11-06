    (function () {
      var modal = document.querySelector('[data-wechat-modal]');
      var open = document.querySelector('[data-wechat-open]');
      var close = document.querySelector('[data-wechat-close]');
      if (!modal || !open) return;
      // Escape sidebar transforms, clipping and inherited sidebar typography.
      document.body.appendChild(modal);
      open.addEventListener('click', function () {
        modal.showModal();
        document.body.classList.add('wechat-modal-open');
        open.setAttribute('aria-expanded', 'true');
      });
      close.addEventListener('click', function () { modal.close(); });
      modal.addEventListener('click', function (event) {
        if (event.target === modal) modal.close();
      });
      modal.addEventListener('close', function () {
        document.body.classList.remove('wechat-modal-open');
        open.setAttribute('aria-expanded', 'false');
        open.focus();
      });
    }());
