import Swal from "sweetalert2";

export const Success = () => {
  Swal.fire({
    title: "Sucesso!",
    text: "Aluno Cadastrado",
    icon: "success",
    showConfirmButton: false,
    timer: 1000,
  });
};

export const Incorrect = () => {
  Swal.fire({
    title: "Error!",
    text: "Revise as Informações",
    icon: "error",
    confirmButtonColor: "#7cdddb",
    confirmButtonText: "OK",
  });
};
