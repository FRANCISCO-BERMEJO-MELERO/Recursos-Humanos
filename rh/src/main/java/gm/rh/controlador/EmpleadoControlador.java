package gm.rh.controlador;

import gm.rh.excepcion.RecursoNoEncontradoExcepcion;
import gm.rh.modelo.Empleado;
import gm.rh.servicio.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    //http://localhost:8080/rh-app/empleados
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados(){
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }

    //Esto es para agregar un empleado cuando el id es nulo
    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado a agregar" + empleado);
        return empleadoServicio.guardarEmpleado(empleado);
    }
    
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId (@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarPorId(id);
        if (empleado == null)
            throw  new RecursoNoEncontradoExcepcion("No se ha encontrado el id: " + id );
        return ResponseEntity.ok(empleado);
    }

    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Integer id, @RequestBody Empleado empleadoActualizado){
        Empleado empleado = empleadoServicio.buscarPorId(id);
        if (empleado == null)
            throw  new RecursoNoEncontradoExcepcion("No se ha encontrado el id: " + id );
        empleado.setNombre(empleadoActualizado.getNombre());
        empleado.setDepartamento(empleadoActualizado.getDepartamento());
        empleado.setSueldo(empleadoActualizado.getSueldo());
        empleadoServicio.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleado);
    }

    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarPorId(id);
        if (empleado == null)
            throw  new RecursoNoEncontradoExcepcion("No se ha encontrado el id: " + id );
        empleadoServicio.eliminarEmpleado(id);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
