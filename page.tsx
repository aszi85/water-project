export default function AboutPage() {
  return (
    <div>
      <div style={{ background: "#0D1B2A", padding: "24px 40px", borderTop: "1px solid #1A2E42" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <div style={{ width: "20px", height: "2px", background: "#2E9CCA" }} />
          <span style={{ color: "#2E9CCA", fontSize: "11px", letterSpacing: "1.5px", fontWeight: 500 }}>SOBRE O PROJECTO</span>
        </div>
        <h1 style={{ color: "white", fontSize: "24px", fontWeight: 500, marginBottom: "6px" }}>Sobre o Água Maputo</h1>
        <p style={{ color: "#8A9BB0", fontSize: "13px" }}>Uma plataforma pública para monitorizar o acesso à água em Maputo.</p>
      </div>

      <div style={{ padding: "40px", maxWidth: "1500px", margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#D8DCE0", marginBottom: "1px" }}>
          <div style={{ background: "white", padding: "28px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#0D1B2A", marginBottom: "12px" }}>O que é este site</p>
            <p style={{ fontSize: "13px", color: "#8A9BB0", lineHeight: "1.75", marginBottom: "16px" }}>
              O Água Maputo é uma plataforma pública que mapeia os pontos de acesso a água na cidade de Maputo.
              Permite aos cidadãos localizar furos, chafarizes e quiosques de água, ver o seu estado de funcionamento
              e reportar avarias em tempo real.
            </p>
            <img
              src="https://www.bmeia.gv.at/fileadmin/_processed_/8/8/csm_Miracle_Orphanage_Borehole___pump_2_45c679e1a8.jpg"
              alt="Furos de água em Moçambique"
              style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ background: "white", padding: "28px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#0D1B2A", marginBottom: "12px" }}>Porquê este projecto</p>
            <p style={{ fontSize: "13px", color: "#8A9BB0", lineHeight: "1.75", marginBottom: "16px" }}>
              Muitos bairros de Maputo enfrentam desafios no acesso a água potável. Esta plataforma foi criada
              para dar visibilidade a esse problema e ajudar as comunidades a encontrar fontes de água alternativas
              quando o abastecimento falha.
            </p>
            <img
              src="https://opais.co.mz/wp-content/uploads/files/2018/Agosto/Semana-1/FUROS.jpg"
              alt="Furos de água em Moçambique"
              style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        <div style={{ background: "white", padding: "28px", marginBottom: "1px" }}>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "#0D1B2A", marginBottom: "16px" }}>Fontes de dados</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#D8DCE0" }}>
            {[
              { num: "01", title: "FIPAG", desc: "Fundo de Investimento e Património do Abastecimento de Água" },
              { num: "02", title: "Conselho Municipal", desc: "Dados de infra-estrutura do Município de Maputo" },
              { num: "03", title: "Comunidade", desc: "Relatórios submetidos pelos cidadãos de Maputo" },
            ].map((source) => (
              <div key={source.num} style={{ background: "#F4F6F8", padding: "20px" }}>
                <div style={{ fontSize: "20px", fontWeight: 500, color: "#D8DCE0", marginBottom: "8px" }}>{source.num}</div>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "#0D1B2A", marginBottom: "4px" }}>{source.title}</p>
                <p style={{ fontSize: "11px", color: "#8A9BB0", lineHeight: "1.5" }}>{source.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#D8DCE0", marginBottom: "1px" }}>
          <img
            src="https://opais.co.mz/wp-content/uploads/files/2018/Agosto/Semana-1/FUROS.jpg"
            alt="Furo de água"
            style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
          />
          <img
            src="https://th.bing.com/th/id/OIP.RNwzNJAx8fFZAuT13unTcAHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Acesso a água"
            style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
          />
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.E2mqJOvDNRx6beJZE3OnTwHaEy?w=760&h=492&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Distribuição de água"
            style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{ background: "#0D1B2A", padding: "28px" }}>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "white", marginBottom: "6px" }}>Quer contribuir?</p>
          <p style={{ fontSize: "12px", color: "#8A9BB0", marginBottom: "16px", lineHeight: "1.6" }}>
            Reporte avarias, sugira novos pontos de água ou contacte-nos para colaborar no projecto.
          </p>
          <a href="/report" style={{ background: "#2E9CCA", color: "white", padding: "10px 24px", fontSize: "12px", fontWeight: 500 }}>
            Reportar agora
          </a>
        </div>

      </div>
    </div>
  );
}