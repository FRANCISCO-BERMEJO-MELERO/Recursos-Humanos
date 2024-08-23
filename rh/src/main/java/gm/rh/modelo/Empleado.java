package gm.rh.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

//Con esto creamos la tabla de empleados automaticamente
@Entity
//Esto es para que se generen los metodos de get y sey
@Data
//Esto para crear los constructores
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Empleado {
    @Id
    //Con esto se genera automaticamente la llave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idEmpelado;
    String nombre;
    String departamento;
    Double sueldo;
}
