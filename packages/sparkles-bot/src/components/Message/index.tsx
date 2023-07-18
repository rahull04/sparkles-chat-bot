import './index.scss';

export const Message = ({ title }: { title: string }) => {
  return (
    <div className="message-container">
      <div className="arrow">
        <div className="outer"></div>
        <div className="inner"></div>
      </div>
      <div className="message-body">
        <p>{title}</p>
      </div>
    </div>
  );
};
