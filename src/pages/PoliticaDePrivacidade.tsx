import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 12 de janeiro de 2026
            </p>
          </div>

          <Card className="p-8">
            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p className="text-muted-foreground mb-4">
                  Bem-vindo ao Helplistas.com.br. Respeitamos sua privacidade e estamos comprometidos em 
                  proteger seus dados pessoais. Esta política de privacidade explica como coletamos, usamos 
                  e protegemos suas informações quando você visita nosso site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
                <p className="text-muted-foreground mb-4">
                  O Helplistas.com.br é um site informativo que fornece listas gratuitas. Nós coletamos 
                  informações mínimas, incluindo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
                  <li>Informações técnicas (tipo de navegador, dispositivo, endereço IP)</li>
                  <li>Cookies para melhorar sua experiência de navegação</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Usamos suas Informações</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Melhorar a experiência do usuário em nosso site</li>
                  <li>Analisar o tráfego e comportamento dos visitantes</li>
                  <li>Personalizar o conteúdo apresentado</li>
                  <li>Exibir anúncios relevantes através do Google AdSense</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos cookies para melhorar sua experiência de navegação. Os cookies são pequenos 
                  arquivos de texto armazenados em seu dispositivo que nos ajudam a lembrar suas preferências 
                  e entender como você usa nosso site. Você pode desativar os cookies nas configurações do 
                  seu navegador, mas isso pode afetar a funcionalidade do site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Google AdSense</h2>
                <p className="text-muted-foreground mb-4">
                  Este site utiliza o Google AdSense para exibir anúncios. O Google usa cookies para 
                  exibir anúncios com base nas visitas anteriores dos usuários a este site ou outros sites. 
                  Os usuários podem desativar a publicidade personalizada visitando as 
                  Configurações de anúncios do Google.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto quando exigido por lei ou para operar nosso site (como parceiros de análise e 
                  publicidade, incluindo o Google AdSense).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Segurança</h2>
                <p className="text-muted-foreground mb-4">
                  Implementamos medidas de segurança para proteger suas informações contra acesso não 
                  autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão 
                  pela internet é 100% seguro.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Links para Sites de Terceiros</h2>
                <p className="text-muted-foreground mb-4">
                  Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas 
                  práticas de privacidade desses sites. Recomendamos que você leia as políticas de 
                  privacidade de qualquer site que você visitar.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Direitos do Usuário (LGPD)</h2>
                <p className="text-muted-foreground mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Confirmar a existência de tratamento de seus dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar seu consentimento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Alterações nesta Política</h2>
                <p className="text-muted-foreground mb-4">
                  Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você 
                  revise esta página regularmente para se manter informado sobre como estamos protegendo 
                  suas informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contato</h2>
                <p className="text-muted-foreground mb-4">
                  Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco através 
                  da nossa <a href="/contato" className="text-primary hover:underline">página de contato</a>.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
