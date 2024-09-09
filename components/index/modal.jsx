import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





// or via CommonJS

const Modal = () => {

    const MySwal = withReactContent(Swal)

    const fn = async () => {
        Swal.fire({
            title: "Esta es una versión demo",
            html: `
            Puedes quedarte y ver el <b>website</b> ó ver la
            <a href="https://keinnerross.github.io/SologomasApp/" target="_blank" rel="noopener noreferrer"><b style="color: #e32a30">demo del cotizador</b></a> de correas.
          `,
          iconColor: "#e32a30",
            icon: "info",
            width: 600,
            padding: "3em",
            confirmButtonColor: "#e32a30",

            confirmButton: 'aceptar',

            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.tenor.com/rI_0O_9AJ5sAAAAi/nyan-cat-poptart-cat.gif")
              left top
              no-repeat
            `
        });


    }

    useEffect(() => {
        fn();
    }, [])

    return (
        <div>
            <div style={{}} >

            </div>
        </div>
    )
}

export default Modal