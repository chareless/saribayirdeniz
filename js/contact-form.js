// Gönderiyi Formspree'ye fetch ile iletir, böylece ziyaretçi sayfada kalır ve
// sonucu formun altında görür. Bu dosya yüklenmezse form normal HTML POST
// olarak çalışmaya devam eder.
document.addEventListener("DOMContentLoaded", function () {
  if (!window.fetch) {
    return; // fetch yoksa tarayıcı formu kendi gönderir
  }

  var forms = document.querySelectorAll("form[data-contact-form]");

  Array.prototype.forEach.call(forms, function (form) {
    var button = form.querySelector("[type=submit]");
    var status = form.querySelector(".contact-form-status");
    var buttonLabel = button ? button.innerHTML : "";

    function setStatus(message, state) {
      if (!status) {
        return;
      }
      status.textContent = message || "";
      status.className = "contact-form-status" + (state ? " is-" + state : "");
    }

    function setBusy(busy) {
      if (!button) {
        return;
      }
      button.disabled = busy;
      button.innerHTML = busy
        ? form.getAttribute("data-sending-label") || buttonLabel
        : buttonLabel;
    }

    // Tarayıcı doğrulaması geçmeden submit olayı tetiklenmez.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      setStatus(form.getAttribute("data-sending"));
      setBusy(true);

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          return response.json().then(
            function (data) {
              return { ok: response.ok, data: data };
            },
            function () {
              return { ok: response.ok, data: {} };
            }
          );
        })
        .then(function (result) {
          if (!result.ok) {
            throw new Error("submission rejected");
          }
          form.reset();
          setStatus(form.getAttribute("data-success"), "success");
        })
        .catch(function () {
          setStatus(form.getAttribute("data-error"), "error");
        })
        .then(function () {
          setBusy(false);
        });
    });
  });
});
