import Swal from "sweetalert2";

export const Success = () => {
  Swal.fire({
    //position: "top-center",
    title: "Sucesso!",
    text: "Aluno Cadastrado",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
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
