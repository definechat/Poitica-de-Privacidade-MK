
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const companyEmail = "topfeminina2@gmail.com";
  const companyWebsite = "[www.seusite.com]";
  const lastUpdated = "24 de Julho de 2024";

  return (
    <div className="bg-slate-100 min-h-screen font-sans text-slate-800">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          
          <header className="border-b pb-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Política de Privacidade
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Última atualização: {lastUpdated}
            </p>
          </header>

          <section className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              A sua privacidade é importante para nós. Respeitamos a sua privacidade em relação a qualquer informação sua que possamos coletar no site {companyWebsite}, e outros sites que possuímos e operamos.
            </p>
            <p>
              Esta política de privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você visita nosso site e utiliza nossos serviços, especialmente no contexto de campanhas publicitárias veiculadas através de plataformas como o Facebook Ads.
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">1. Informações que Coletamos</h2>
              <p>Podemos coletar informações sobre você de várias maneiras. As informações que podemos coletar no Site incluem:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Dados Pessoais:</strong> Informações de identificação pessoal, como seu nome, endereço de e-mail, número de telefone, que você nos fornece voluntariamente ao se registrar no site, participar de promoções ou entrar em contato conosco.
                </li>
                <li>
                  <strong>Dados de Uso e Derivados:</strong> Informações que nossos servidores coletam automaticamente quando você acessa o Site, como seu endereço IP, tipo de navegador, sistema operacional, horários de acesso e as páginas que você visualizou diretamente antes e depois de acessar o Site.
                </li>
                 <li>
                  <strong>Dados de Rastreamento (Cookies e Pixels):</strong> Utilizamos cookies, web beacons, pixels de rastreamento (como o Pixel do Facebook) e outras tecnologias de rastreamento para ajudar a personalizar o Site e melhorar sua experiência. Essas tecnologias nos ajudam a entender como você usa nossos serviços e a exibir anúncios mais relevantes.
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">2. Como Usamos Suas Informações</h2>
              <p>Ter informações precisas sobre você nos permite fornecer uma experiência tranquila, eficiente e personalizada. Especificamente, podemos usar as informações coletadas sobre você através do Site para:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Criar e gerenciar sua conta.</li>
                <li>Enviar a você e-mails sobre sua conta ou pedido.</li>
                <li>Melhorar a eficiência e a operação do Site.</li>
                <li>Monitorar e analisar o uso e as tendências para melhorar sua experiência.</li>
                <li>Entregar publicidade direcionada, cupons, newsletters e outras informações sobre promoções para você.</li>
                <li>Realizar outras atividades de negócios, conforme necessário.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">3. Compartilhamento de Informações</h2>
              <p>Não compartilhamos, vendemos, alugamos ou trocamos suas informações com terceiros para fins promocionais sem o seu consentimento. No entanto, podemos compartilhar informações sobre você em certas situações:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Provedores de Serviços:</strong> Podemos compartilhar suas informações com terceiros que realizam serviços para nós ou em nosso nome, incluindo processamento de pagamentos, análise de dados, entrega de e-mail, serviços de hospedagem, atendimento ao cliente e assistência de marketing (incluindo plataformas de publicidade como o Facebook).
                </li>
                <li>
                  <strong>Por Lei ou para Proteger Direitos:</strong> Se acreditarmos que a liberação de informações sobre você é necessária para responder a processos legais, para investigar ou remediar potenciais violações de nossas políticas, ou para proteger os direitos, propriedade e segurança de outros, podemos compartilhar suas informações conforme permitido ou exigido por qualquer lei, regra ou regulamento aplicável.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">4. Cookies e Publicidade no Facebook</h2>
              <p>
                Utilizamos o Pixel do Facebook e outras tecnologias de cookies para fins de remarketing e análise. Isso significa que podemos mostrar anúncios para você em outras plataformas (como o Facebook e Instagram) após sua visita ao nosso site. Essas ferramentas nos ajudam a medir a eficácia de nossa publicidade, entender as ações que os visitantes realizam em nosso site e construir públicos personalizados para nossas campanhas.
              </p>
              <p>
                Você pode gerenciar e optar por não receber publicidade baseada em interesses do Facebook através das <a href="https://www.facebook.com/ads/preferences/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configurações de Anúncios do Facebook</a>.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">5. Segurança dos Dados</h2>
              <p>
                Usamos medidas de segurança administrativas, técnicas e físicas para ajudar a proteger suas informações pessoais. Embora tenhamos tomado medidas razoáveis para proteger as informações pessoais que você nos fornece, esteja ciente de que, apesar de nossos esforços, nenhuma medida de segurança é perfeita ou impenetrável, e nenhum método de transmissão de dados pode ser garantido contra qualquer interceptação ou outro tipo de uso indevido.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">6. Seus Direitos e Escolhas</h2>
              <p>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Você também pode se opor ao processamento de seus dados. Para exercer esses direitos, entre em contato conosco através do e-mail fornecido abaixo.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">7. Alterações a Esta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade de tempos em tempos. A versão atualizada será indicada por uma data de "Última atualização" e a versão atualizada entrará em vigor assim que estiver acessível. Encorajamos você a revisar esta política de privacidade com frequência para se manter informado sobre como estamos protegendo suas informações.
              </p>
            </div>
            
            <div className="space-y-4 pt-6 mt-8 border-t">
              <h2 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">8. Contato</h2>
              <p>
                Se você tiver dúvidas ou comentários sobre esta Política de Privacidade, entre em contato conosco em:
              </p>
              <p className="font-medium text-slate-900">
                <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">{companyEmail}</a>
              </p>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
