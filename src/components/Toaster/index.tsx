import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer)
        toast.addEventListener("mouseleave", Swal.resumeTimer)
    }
})

export const notifySuccess = (text: string) => {
    Toast.fire({
        icon: "success",
        title: text,
        background: "#276e2f",
        color: 'white',
        iconColor: 'white'
    })
}

export const notifyFailed = (text: string) => {
    Toast.fire({
        icon: "error",
        title: text,
        background: "#b80c09ff",
        color: 'white',
        iconColor: 'white'
    })
}