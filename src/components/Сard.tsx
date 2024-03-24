type Item = {
    title: string;
    description: string;
    link: string;
    children?: React.ReactNode;
  }

export const Card: React.FC<Item> = ({title, description, link, children}) => {

  return (
    <div className="card">

      {children && <div>{children}</div>}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">{ link }</button>
      </div>
    </div>
  );
};
