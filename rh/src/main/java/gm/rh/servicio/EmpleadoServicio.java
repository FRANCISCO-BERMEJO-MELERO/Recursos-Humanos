package gm.rh.servicio;

import gm.rh.modelo.Empleado;
import gm.rh.modelo.repositorio.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Añadimos estaa linea para que podamos utilizar la clase como una de spring
public class EmpleadoServicio implements IEmpleadoServicio{

    @Autowired
    private EmpleadoRepositorio empleadoRepositorio;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll(); //Utilizamos findAll para listar empleados
    }

    @Override
    public Empleado buscarPorId(Integer idEmpleado) {
        Empleado empleado = empleadoRepositorio.findById(idEmpleado).orElse(null); //Si encuentra al empleado devuelve un objeto empleado pero si no lo encuentra devuelve null
        return empleado;
    }

    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepositorio.save(empleado);//El metodo de save recibe un objeto empleado y devuelve el objeto que se haya insertado o que sse haya actualizado
    }

    @Override
    public void eliminarEmpleado(Integer idEmpleado) {
        empleadoRepositorio.deleteById(idEmpleado); //El metodo deleteById borra el empleado con el id especificado
    }
}
