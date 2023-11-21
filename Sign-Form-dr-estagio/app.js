// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("#emailForm");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();  Impede o envio padrão do formulário

//     const nome = document.querySelector('input[type="text"]').value;
//     const email = document.querySelector('input[type="email"]').value;
//     const empresa = document.querySelector('input[type="text"]').value;

//     const sendGridApiKey =
//       "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";

//   Detalhes do email
//     const emailDetails = {
//       personalizations: [
//         {
//           to: [
//             {
//               email: email,
//             },
//           ],
//           subject: "ola",
//         },
//       ],
//       from: {
//         email: "rev3npvp@gmail.com",
//       },
//       content: [
//         {
//           type: "text/plain",
//           value: `Olá ${nome},\n\nAcesse o link: https://drive.google.com/file/d/1j0YsaYOoO_e6Xt1DszoVM0cjoiZFlZkE/view`,
//         },
//       ],
//     };

// Código para enviar o email usando a API do SendGrid
//     fetch("https://api.sendgrid.com/v3/mail/send", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${sendGridApiKey}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(emailDetails),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Email enviado com sucesso:", data);
//       })
//       .catch((error) => console.error("Erro ao enviar email:", error));
//   });
//   const sign_up_btn = document.getElementById("sign_up_btn");

//   if (sign_up_btn) {
//     sign_up_btn.addEventListener("click", () => {
//       alert("Botão de Sign Up clicado!");
//     });
//   } else {
//     console.error("Elemento não encontrado com a classe sign_up_btn");
//   }
// });
