import { FileText, Scale, Shield, AlertCircle, CheckCircle2, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Scale className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Info className="w-6 h-6 text-primary" />
                Bem-vindo ao Helplistas
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Ao acessar e usar o site Helplistas.com.br, você concorda com estes Termos de Uso. 
                Por favor, leia-os atentamente. Se você não concordar com qualquer parte destes termos, 
                não deverá usar nosso site.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="w-7 h-7 text-primary" />
                Sobre Nosso Serviço
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  O Helplistas é uma plataforma <strong>100% gratuita</strong> que oferece listas práticas para 
                  diversas finalidades: compras, material escolar, casamento, casa nova, entre outras.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Todas as nossas listas são elaboradas com base em <strong>pesquisas aprofundadas</strong> sobre 
                  consumo e necessidades médias de famílias brasileiras.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  As listas são <strong>atualizadas mensalmente</strong> para garantir que você tenha acesso às 
                  informações mais relevantes e atuais.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>Não recebemos comissões ou pagamentos</strong> de marcas ou lojas recomendadas. 
                  Nossas sugestões são totalmente imparciais.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Usage Terms */}
          <Card>
            <CardHeader>
              <CardTitle>1. Uso Permitido</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-4">Você pode:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Acessar e baixar nossas listas gratuitamente</li>
                <li>• Imprimir as listas para uso pessoal</li>
                <li>• Compartilhar links do nosso site com outras pessoas</li>
                <li>• Adaptar as listas para suas necessidades específicas</li>
              </ul>
              <p className="text-muted-foreground mt-4 mb-4">Você NÃO pode:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Revender ou comercializar nossas listas</li>
                <li>• Reproduzir o conteúdo do site sem atribuição adequada</li>
                <li>• Usar nosso conteúdo para fins ilegais ou antiéticos</li>
                <li>• Tentar hackear, danificar ou sobrecarregar nossos servidores</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                2. Isenção de Responsabilidade
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground font-semibold mb-4">
                Importante: Leia atentamente esta seção
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>2.1 Variabilidade das Necessidades:</strong> As listas são elaboradas com base em 
                  pesquisas sobre consumo familiar médio. Entendemos que cada família, região e situação é única. 
                  Portanto, as listas podem conter itens que você não precisa ou não incluir itens específicos 
                  que você necessita.
                </p>
                <p>
                  <strong>2.2 Adaptação Necessária:</strong> Recomendamos fortemente que você revise e adapte 
                  nossas listas de acordo com suas necessidades específicas, condições locais, preferências 
                  pessoais e orçamento disponível.
                </p>
                <p>
                  <strong>2.3 Sem Garantias:</strong> Não garantimos que as listas sejam completas, precisas 
                  ou adequadas para todos os casos. Não nos responsabilizamos por:
                </p>
                <ul className="space-y-2 mt-2">
                  <li>• Listas que possam estar incompletas para suas necessidades específicas</li>
                  <li>• Itens que possam estar sobrando para seu caso particular</li>
                  <li>• Variações de preços entre diferentes regiões e lojas</li>
                  <li>• Disponibilidade dos produtos sugeridos</li>
                  <li>• Qualidade ou adequação dos produtos</li>
                </ul>
                <p>
                  <strong>2.4 Decisão Final:</strong> A decisão final sobre quais itens comprar ou adquirir 
                  é sempre sua. Use nosso conteúdo como referência e guia, não como instrução obrigatória.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>3. Propriedade Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Todo o conteúdo do Helplistas, incluindo textos, listas, design, logos e materiais gráficos, 
                é de propriedade do Helplistas.com.br ou de seus colaboradores e está protegido por leis de 
                direitos autorais.
              </p>
              <p className="text-muted-foreground mt-4">
                Você pode usar nosso conteúdo para fins pessoais e não comerciais, desde que mantenha todos 
                os avisos de direitos autorais e dê o devido crédito ao Helplistas.
              </p>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                4. Privacidade e Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Respeitamos sua privacidade. Coletamos apenas dados mínimos necessários para o funcionamento 
                do site (através de cookies essenciais e analíticos).
              </p>
              <p className="text-muted-foreground mt-4">
                Para mais informações sobre como tratamos seus dados, consulte nossa Política de Privacidade 
                e Política de Cookies.
              </p>
            </CardContent>
          </Card>

          {/* External Links */}
          <Card>
            <CardHeader>
              <CardTitle>5. Links Externos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Nosso site pode conter links para sites externos. Não somos responsáveis pelo conteúdo, 
                políticas de privacidade ou práticas desses sites. Recomendamos que você leia os termos 
                e políticas de qualquer site externo que visitar.
              </p>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle>6. Atualizações das Listas</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Nos esforçamos para manter nossas listas atualizadas mensalmente. No entanto, não podemos 
                garantir que todas as listas sejam atualizadas exatamente no mesmo período. Alguns conteúdos 
                podem ser atualizados com maior frequência do que outros, dependendo da relevância e das 
                mudanças no mercado.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>7. Alterações nos Termos</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Podemos atualizar estes Termos de Uso periodicamente. Quando fizermos alterações significativas, 
                notificaremos você através de um aviso em nosso site. O uso continuado do site após as alterações 
                constitui sua aceitação dos novos termos.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>8. Lei Aplicável</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer 
                disputa relacionada a estes termos será resolvida nos tribunais brasileiros.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>9. Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através da nossa 
                página de contato. Estamos sempre disponíveis para esclarecer qualquer questão.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                <strong>Ao usar o Helplistas, você declara que leu, entendeu e concordou com estes Termos de Uso.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermosDeUso;
