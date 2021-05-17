interface ChildProps {
  color: string;
  onClick: () => void;
}

// TS doesn't know that we're making a React component
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// 'Child' will be a React function component
// 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'
// 'Child' will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
