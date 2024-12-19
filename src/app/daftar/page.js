export default function WelcomePage() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="logo">
            <span className="icon">🍴</span> Parabite
          </h1>
        </div>
        <p className="subtitle">Jajan dikantin tanpa antri tanpa ribet</p>
        <button className="start-button" onClick={() => alert('Selamat datang di Parabite!')}>
          Mulai
        </button>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to bottom, #FFA500, #fff);
            font-family: Arial, sans-serif;
            text-align: center;
          }
          .header {
            margin-bottom: 20px;
          }
          .logo {
            font-size: 36px;
            color: #009FE3;
          }
          .subtitle {
            font-size: 14px;
            color: #333;
            margin-bottom: 20px;
          }
          .start-button {
            background-color: #E69500;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .start-button:hover {
            background-color: #CC8400;
          }
        `}</style>
      </div>
    );
  }
  