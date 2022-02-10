
import Stack from "../../components/stack";

export const ColorInfo = ({ color, name }) => {
  return (
    <Stack flow='row' gap={1}>
      <p>
        <strong style={{color: color}}>{name}</strong>
      </p>

      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: '5px',
          background: `rgb(${color.rgb})`,
        }}
      />

      <div>
      
        <strong>RGB:</strong>
        <p>{color.rgb}</p>
        <strong>Hex:</strong>
        <p>{color.hex}</p>
       
      </div>
    </Stack>
  );
};


export default ColorInfo;