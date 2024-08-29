package gm.rh.controlador;

import gm.rh.servicio.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//http://localhost:8080/rh-app/
@RequestMapping("rh-app")
//Esto es para hacer peticiones desde React
@CrossOrigin(value = "http://localhost:3000")
public class EmpleadoControlador {
    //COn esto podemos enviar información a consola
    private static final Logger logger = LoggerFactory.getLogger(EmpleadoControlador.class);

    @Autowired
    private IEmpleadoServicio empleadoServicio;

}
