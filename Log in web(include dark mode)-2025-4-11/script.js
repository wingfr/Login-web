(() => {
  const $doc = document;
  const $btn = $doc.getElementById('js-btn');
  const $brBTN = $doc.getElementById('br-btn');
  const $dkBTN = $doc.getElementById('dk-btn');
  const $back = $doc.getElementById('js-back');
  const br = 'is-bright';
  const dk = 'is-dark';
  const $form = $doc.getElementById('js-form');
  const $mail = $doc.getElementById('js-mail');
  const $pass = $doc.getElementById('js-pass');
  console.log($form);

  $btn.addEventListener('click', (e) => {
    const $this = e.target;
    const $targetbtn = $this.dataset.btn;
    console.log($targetbtn);

    $back.classList.remove(br);
    $back.classList.remove(dk);
    $brBTN.classList.remove('is-used');
    $dkBTN.classList.remove('is-used');
    $form.classList.remove(br);
    $form.classList.remove(dk);
    $mail.classList.remove(br);
    $mail.classList.remove(dk);
    $pass.classList.remove(br);
    $pass.classList.remove(dk);

    if ($targetbtn == 0) {
      $back.classList.add(br);
      $brBTN.classList.add('is-used');
      $form.classList.add(br);
      $mail.classList.add(br);
      $pass.classList.add(br);
    } else {
      $back.classList.add(dk);
      $dkBTN.classList.add('is-used');
      $form.classList.add(dk);
      $mail.classList.add(dk);
      $pass.classList.add(dk);
    }
  });
})();
