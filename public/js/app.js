/**
 * App - Navegação (home/profile), menu e modais (mobile)
 * Usado em home.html. Login está em login.html e redireciona para home.html.
 */

(function () {
  'use strict';

  var screens = {
    login: document.getElementById('screen-login'),
    home: document.getElementById('screen-home'),
    profile: document.getElementById('screen-profile')
  };

  var menu = document.getElementById('menu');
  var menuHome = document.getElementById('menu-home');
  var menuAdd = document.getElementById('menu-add');
  var menuProfile = document.getElementById('menu-profile');
  var backdrop = document.getElementById('modal-backdrop');

  var temTelaLogin = !!screens.login;

  function dateMask(value) {
    value = value.replace(/\D/g, '');
    var regex = /(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])(\d{4}$)/;
    return value.replace(regex, '$1/$2/$3');
  }

  function showScreen(name) {
    if (!screens[name]) return;
    Object.keys(screens).forEach(function (k) {
      if (screens[k]) screens[k].classList.remove('active');
    });
    screens[name].classList.add('active');
    if (menu) {
      menu.classList.toggle('is-visible', !temTelaLogin || name !== 'login');
    }
    if (menuHome) menuHome.classList.toggle('is-active', name === 'home');
    if (menuProfile) menuProfile.classList.toggle('is-active', name === 'profile');
    if (name === 'home' && !sessionStorage.getItem('dadosUsuariosAberto')) {
      sessionStorage.setItem('dadosUsuariosAberto', '1');
      openModal('modal-dados');
    }
  }

  function openModal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (backdrop) backdrop.classList.add('is-visible');
    el.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(id) {
    var el = id ? document.getElementById(id) : null;
    if (el) el.classList.remove('is-visible');
    if (backdrop) backdrop.classList.remove('is-visible');
    var open = document.querySelector('.modal-container.is-visible');
    if (!open) document.body.style.overflow = '';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-container.is-visible').forEach(function (m) {
      m.classList.remove('is-visible');
    });
    if (backdrop) backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  if (backdrop) backdrop.addEventListener('click', closeAllModals);

  if (menuHome) menuHome.addEventListener('click', function () { showScreen('home'); });
  if (menuProfile) menuProfile.addEventListener('click', function () { showScreen('profile'); });
  if (menuAdd) menuAdd.addEventListener('click', function () { openModal('modal-criar'); });

  var btnCriarHome = document.getElementById('btn-criar-receita-home');
  if (btnCriarHome) btnCriarHome.addEventListener('click', function () { openModal('modal-criar'); });

  document.getElementById('btn-salvar-dados').addEventListener('click', function () { closeModal('modal-dados'); });
  document.getElementById('btn-salvar-receita').addEventListener('click', function () { closeModal('modal-criar'); });
  document.getElementById('btn-salvar-ingrediente').addEventListener('click', function () { closeModal('modal-criar'); });

  document.querySelectorAll('.modal-close, [data-close]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = this.getAttribute('data-close');
      var container = id ? document.getElementById(id) : this.closest('.modal-container');
      if (container) closeModal(container.id);
    });
  });

  document.querySelectorAll('.screen-home__block-link, .screen-profile__block-link').forEach(function (link) {
    link.addEventListener('click', function (e) { e.preventDefault(); });
  });

  /* Clique no card: abre modal de detalhes com dados do item */
  document.querySelectorAll('.js-card-item').forEach(function (card) {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      var tipo = card.getAttribute('data-tipo') || '';
      var titulo = card.getAttribute('data-titulo') || 'Item';
      var preco = card.getAttribute('data-preco') || '';
      var descricao = card.getAttribute('data-descricao') || '';
      var extra = card.getAttribute('data-extra') || '';

      var elTipo = document.getElementById('detalhe-tipo');
      var elTitulo = document.getElementById('detalhe-titulo');
      var elPreco = document.getElementById('detalhe-preco');
      var elDescricao = document.getElementById('detalhe-descricao');
      var elExtraLabel = document.getElementById('detalhe-extra-label');
      var elExtra = document.getElementById('detalhe-extra');

      if (elTipo) elTipo.textContent = tipo === 'receita' ? 'Receita' : 'Ingrediente';
      if (elTitulo) elTitulo.textContent = titulo;
      if (elPreco) elPreco.textContent = preco;
      if (elDescricao) elDescricao.textContent = descricao;
      if (elExtraLabel) elExtraLabel.textContent = tipo === 'receita' ? 'Ingredientes' : 'Especificações';
      if (elExtra) elExtra.textContent = extra;

      openModal('modal-detalhe');
    });
  });

  var tabReceita = document.getElementById('modal-tab-receita');
  var tabIngrediente = document.getElementById('modal-tab-ingrediente');
  var formReceita = document.getElementById('form-receita');
  var formIngrediente = document.getElementById('form-ingrediente');

  function setTabReceita() {
    if (tabReceita) tabReceita.className = 'btn-kalk btn-kalk--blue';
    if (tabIngrediente) tabIngrediente.className = 'btn-kalk btn-kalk--outline';
    if (formReceita) formReceita.style.display = 'block';
    if (formIngrediente) formIngrediente.style.display = 'none';
  }
  function setTabIngrediente() {
    if (tabReceita) tabReceita.className = 'btn-kalk btn-kalk--outline';
    if (tabIngrediente) tabIngrediente.className = 'btn-kalk btn-kalk--blue';
    if (formReceita) formReceita.style.display = 'none';
    if (formIngrediente) formIngrediente.style.display = 'block';
  }
  if (tabReceita) tabReceita.addEventListener('click', setTabReceita);
  if (tabIngrediente) tabIngrediente.addEventListener('click', setTabIngrediente);

  var inputDataNasc = document.getElementById('input-data-nasc');
  if (inputDataNasc) {
    inputDataNasc.addEventListener('input', function () {
      this.value = dateMask(this.value);
    });
  }

  var inputFilePhoto = document.getElementById('input-file-photo');
  var modalUserPhoto = document.getElementById('modal-user-photo');
  var profilePhoto = document.getElementById('profile-photo');
  if (inputFilePhoto) {
    inputFilePhoto.addEventListener('change', function () {
      var f = this.files[0];
      if (!f) return;
      if (f.size > 5 * 1024 * 1024) {
        alert('Essa imagem é muito grande. Escolha uma de até 5MB');
        return;
      }
      var r = new FileReader();
      r.onload = function () {
        if (modalUserPhoto) modalUserPhoto.src = r.result;
        if (profilePhoto) profilePhoto.src = r.result;
      };
      r.readAsDataURL(f);
    });
  }
  var btnAlterarFoto = document.getElementById('btn-alterar-foto');
  if (btnAlterarFoto) btnAlterarFoto.addEventListener('click', function () {
    if (inputFilePhoto) inputFilePhoto.click();
  });

  window.KalkApp = { showScreen: showScreen, openModal: openModal, closeModal: closeModal };
})();
