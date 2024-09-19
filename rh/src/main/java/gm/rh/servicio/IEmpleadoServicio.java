package gm.rh.servicio;

import gm.rh.modelo.Empleado;

import java.util.List;

public interface IEmpleadoServicio {
    public List<Empleado> listarEmpleados();

    public Empleado buscarPorId(Integer idEmpleado);

    public Empleado guardarEmpleado(Empleado empleado);

    public void eliminarEmpleado(Integer idEmpleado);
}
