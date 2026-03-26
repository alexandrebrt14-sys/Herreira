const fs = require('fs');
const html = `

<!-- PREFÁCIO DIVISÓRIA -->
<div class="page page-section">
  <div class="section-wrap">
    <div class="section-label">Prefácio</div>
    <h2 class="section-title">A menina que via beleza onde ninguém olhava</h2>
    <p class="section-desc">Toda grande história começa com uma menina que sente demais, sonha demais e que ainda não sabe exatamente o que fazer com tudo isso que transborda dentro dela.</p>
  </div>
  <div class="page-num center" style="color:var(--gold);">8</div>
</div>

<!-- PREFÁCIO P1 -->
<div class="page page-cream">
  <div class="running-head">Prefácio</div>
  <div class="body-text">
    <p class="drop-cap">Há uma fotografia que guardo no coração — não em moldura de prata, não em álbum de couro. É uma imagem que só existe na memória, dessas que a gente carrega no corpo mais do que na mente. Eu devia ter uns dez anos. Estava sentada na soleira da porta de casa, em Goiânia, olhando para a tarde que caía devagar sobre o quintal. O sol atravessava as folhas da mangueira e desenhava padrões de luz e sombra no chão. Eu ficava ali, imóvel, fascinada com aquilo.</p>
    <p>Minha mãe passava e dizia: "Patrícia, para de sonhar acordada." Mas eu não estava sonhando. Eu estava vendo. Havia uma diferença enorme entre as duas coisas, e eu ainda não tinha palavras para explicar isso. A luz que filtrava pelas folhas era uma peça de joia que a natureza criava toda tarde e que desaparecia toda noite. Era efêmera, única, extraordinária — e mais ninguém ao meu redor parecia enxergar.</p>
    <p>Este livro nasceu daquela menina. Nasceu da mulher que ela se tornou. Nasceu das madrugadas dentro da oficina, das contas que não fechavam, das peças que saíam perfeitas depois de três tentativas erradas, dos choros escondidos no banheiro da fábrica e das gargalhadas que vinham logo depois, sem aviso.</p>
    <div class="pull-quote">
      <p>"O Brasil nos ensina todos os dias que a beleza não grita, ela se revela. Está na luz que atravessa as manhãs, na força da natureza que segue sem pressa."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
    <p>Eu não escrevi este livro porque tenho todas as respostas. Escrevi porque tenho as perguntas certas — e porque aprendi que as perguntas certas valem mais do que qualquer manual de gestão. Escrevi porque há uma mulher empreendedora em algum lugar do Brasil que está exatamente onde eu estava em 2008: cheia de coragem, cheia de medo, com uma ideia que não cabe dentro dela e sem saber ao certo se deve saltar.</p>
  </div>
  <div class="page-num right">9</div>
</div>

<!-- PREFÁCIO P2 -->
<div class="page page-cream">
  <div class="running-head right">A Joia que Sou</div>
  <div class="body-text">
    <p>Para essa mulher eu escrevo. Para ela e para mim mesma, que às vezes ainda precisa ser lembrada de onde veio e do quanto percorreu.</p>
    <p>Sou Patrícia dos Santos Pessoa Caramaschi. Sou filha de Goiânia, neta de pessoas simples que nunca tiveram muito mas sempre tiveram dignidade. Comecei a trabalhar aos catorze anos. Não por ambição precoce — por necessidade, por caráter, por uma força que existia em mim antes mesmo de eu saber chamá-la pelo nome. Sou empresária, designer, mãe de Julie e Arthur, esposa de Alexandre, e CEO do grupo que construí com as minhas mãos e com o meu coração: a Herreira Joias.</p>
    <p>Hoje o grupo faz R$ 21 milhões de faturamento. Temos três marcas, centenas de colaboradoras, milhares de revendedoras espalhadas pelo Brasil e mais de 594 mil seguidores no Instagram da Herreira. Números que me orgulham. Números que também me ensinam que número nenhum conta a história completa.</p>
    <p>A história completa tem suor e fé. Tem Alexandre me olhando nos olhos e dizendo que eu conseguiria quando eu mesma duvidava. Tem noites em que os filhos dormiam e eu ficava calculando se o caixa do mês seguinte fecharia. Tem o momento em que olhei para a primeira coleção da Herreira e percebi que tinha criado algo que não existia antes de mim — e que isso era, talvez, a coisa mais próxima de um milagre que eu conhecia.</p>
    <div class="pull-quote">
      <p>"Desde os meus 13 anos, sempre tive a convicção de que um dia teria uma família linda. Deus honrou o que eu acreditei."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
    <p>Este prefácio é uma promessa: nas páginas que seguem, não encontrarás apenas estratégia de negócios. Encontrarás alma. Encontrarás a confissão de uma mulher que aprendeu que ser joia não é ser perfeita. É ser genuína.</p>
  </div>
  <div class="page-num right">10</div>
</div>

<!-- PREFÁCIO P3 -->
<div class="page page-cream">
  <div class="running-head">Prefácio</div>
  <div class="body-text">
    <p>Há um conceito que me acompanha desde que fundei a Herreira: toda joia carrega dentro de si uma história de pressão. O diamante é carbono que suportou o peso da terra por milênios. O ouro passa pelo fogo antes de ser moldado. A pérola nasce do incômodo, de um grão de areia que irritou a ostra até que ela transformasse a dor em beleza.</p>
    <p>Somos assim, nós mulheres. Passamos pela pressão, pelo fogo, pelo incômodo — e quando saímos do outro lado, somos algo que ninguém conseguia prever. Somos joias que não precisam de vitrine para brilhar. Brilhamos porque passamos por aquilo que tentou nos apagar.</p>
    <p>A menina que ficava olhando a luz nas folhas da mangueira não sabia que um dia desenharia coleções inspiradas naquela mesma luz. Não sabia que o olhar que a incomodava — "para de sonhar acordada, Patrícia" — era exatamente o que a tornaria capaz de criar beleza. O dom de ver o que os outros não veem. Esse é o meu. E levei tempo para aceitar que isso não era excentricidade. Era vocação.</p>
    <p>Durante os primeiros anos da Herreira, eu me envergonhava um pouco de dizer que era de Goiânia. O mercado de moda e joias no Brasil tem sua gravidade em São Paulo, no Rio. Goiânia parecia distante, interior, invisível. Aprendi — na prática, com cicatrizes — que invisível é apenas o que ainda não foi iluminado. E que iluminar o que ninguém vê é o trabalho mais bonito que existe.</p>
    <div class="ornament">&#10022; &nbsp; &#10022; &nbsp; &#10022;</div>
    <p class="no-indent">Que este livro seja para você o que a luz daquela tarde foi para mim: um convite a ver com mais atenção, a sentir com mais profundidade, e a confiar que o que você carrega dentro de si já é suficiente para construir algo extraordinário.</p>
    <p>A joia que você é já existe. Só precisa ser revelada.</p>
    <p style="text-align:right;font-style:italic;color:var(--text-light);margin-top:6mm;">— Patrícia Caramaschi<br>Goiânia, março de 2026</p>
  </div>
  <div class="page-num right">11</div>
</div>

<!-- CAP 1 DIVISÓRIA -->
<div class="page page-section">
  <div class="section-wrap">
    <div class="section-num">01</div>
    <div class="section-label">Capítulo Um</div>
    <h2 class="section-title">Menor Aprendiz: quando o trabalho me encontrou aos 14</h2>
    <p class="section-desc">A menina de Goiânia que começou como aprendiz, encarou jornada integral aos 17, e forjou sem saber a garra que sustentaria um império.</p>
  </div>
  <div class="page-num center" style="color:var(--gold);">12</div>
</div>

<!-- CAP 1 P1 -->
<div class="page page-cream">
  <div class="chapter-num-big">01</div>
  <div class="chapter-header">
    <div class="chapter-label">Capítulo 1</div>
    <h2 class="chapter-title">Menor Aprendiz:<br><span style="font-size:10pt;font-family:'Montserrat',sans-serif;font-style:normal;font-weight:400;color:var(--text-light);letter-spacing:0px;">quando o trabalho me encontrou aos 14</span></h2>
  </div>
  <div class="body-text">
    <p class="drop-cap">Trabalho desde os 14 anos. Comecei como menor aprendiz, e isso não é detalhe de currículo — é o alicerce de tudo que construí depois. Havia uma necessidade real por trás daquele primeiro emprego, mas havia também algo mais difícil de nomear: uma urgência interior, uma impaciência com a passividade, uma vontade de estar no mundo de verdade, de fazer parte de algo maior do que o quintal de casa.</p>
    <p>Goiânia nos anos 1990 era uma cidade que crescia rápido e desigualmente. Havia bairros novos surgindo, shoppings sendo construídos, uma classe média se formando com a velocidade e a ansiedade típicas do Centro-Oeste em expansão. E havia famílias como a minha, onde se aprendia desde cedo que dignidade e trabalho eram a mesma coisa.</p>
    <p>Eu não tive medo de serviço pesado. Nunca tive. Isso é algo que precisei dizer em voz alta algumas vezes na vida, porque há uma narrativa que associa mulher empreendedora bem-sucedida a uma origem de privilégio, a um capital inicial que chegou fácil, a contatos herdados de família. A minha história é outra. A minha história começa com uma adolescente que acordava cedo, que aprendia rápido, e que guardava cada lição de trabalho como se fosse ouro — porque sabia, instintivamente, que aquilo valia mais do que qualquer herança material.</p>
    <div class="pull-quote">
      <p>"Trabalho desde os 14 anos. Comecei como menor aprendiz, aos 17 já encarava jornada integral. Nunca tive medo de serviço pesado."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
  </div>
  <div class="page-num right">13</div>
</div>

<!-- CAP 1 P2 -->
<div class="page page-cream">
  <div class="running-head right">A Joia que Sou</div>
  <div class="body-text">
    <p>Como menor aprendiz, eu observava tudo. Esse é o superpoder que a posição subalterna oferece: você é invisível o suficiente para ver como as coisas realmente funcionam. Via como os adultos tomavam decisões, via onde erravam, via o que faziam bem. Absorvia metodologias sem saber que estava fazendo isso. Aprendia a linguagem do trabalho — a pontualidade, a responsabilidade, a arte de ser confiável quando o mundo conta com você.</p>
    <p>Aos dezessete anos, já enfrentava a jornada completa. Não era mais aprendiz. Era trabalhadora. E havia uma diferença profunda entre as duas coisas — não de carga horária, mas de identidade. Quando você trabalha em tempo integral aos dezessete, você para de ser menina mais cedo do que o previsto. Ou melhor: você se torna um tipo específico de mulher. Aquela que não espera que as coisas aconteçam. Aquela que vai buscar.</p>
    <p>Havia dias difíceis. Claro que havia. Dias em que o cansaço pesava mais que a determinação, em que eu via colegas saindo mais cedo, indo a festas, tendo a adolescência que eu havia colocado em segundo plano. Mas eu nunca encarei aquilo como privação. Encarei como escolha. Havia algo em mim que preferia o aprendizado ao entretenimento, que preferia construir ao celebrar antes de ter o que comemorar.</p>
    <p>Essa postura não nasceu de frieza. Nasceu de clareza. Eu sabia, com uma certeza que não conseguia explicar racionalmente, que estava sendo preparada para algo. Não sabia o quê. Não sabia quando. Mas sabia que cada hora trabalhada era um tijolo que um dia integraria uma parede que ainda não existia no mundo.</p>
    <div class="pull-quote">
      <p>"Foca no seu sonho, mulher. Ninguém constrói o que você deve construir por você."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
  </div>
  <div class="page-num right">14</div>
</div>

<!-- CAP 1 P3 -->
<div class="page page-cream">
  <div class="running-head">Capítulo 1 — Menor Aprendiz</div>
  <div class="body-text">
    <p>Havia algo que o trabalho precoce me deu que nenhuma escola poderia ensinar: a capacidade de me relacionar com pessoas de realidades muito diferentes da minha. Como aprendiz, trabalhei ao lado de funcionários de carreira, de supervisores que haviam dedicado décadas à mesma empresa, de colegas que estavam começando assim como eu. Aprendi a ouvir com atenção, a adaptar minha comunicação, a encontrar o que havia de valioso em cada pessoa.</p>
    <p>Isso, eu perceberia décadas depois, seria fundamental para liderar uma empresa. A Herreira não é apenas uma marca de joias — é uma comunidade de mulheres. São as costureiras, as montadoras, as embaladoras, as vendedoras, as revendedoras. São centenas de histórias que se cruzam dentro de um propósito comum. E a minha capacidade de me conectar com cada uma dessas histórias vem diretamente daquela adolescente que aprendia a trabalhar ao lado de todos, sem hierarquia no coração.</p>
    <p>A ESPM viria depois. A formação formal, os estudos de marketing, a teoria que dá nome às intuições. Mas o que aprendi dos catorze aos dezessete anos, no chão do trabalho, nenhum diploma conseguiria superar. Aprendi que o trabalho é um ato de fé. Que você planta sem saber exatamente quando vai colher. Que a consistência é mais poderosa do que o talento isolado.</p>
    <p>E aprendi, acima de tudo, que nenhuma mulher precisa pedir permissão para ocupar o espaço que conquistou com as próprias mãos.</p>
    <div class="ornament">&#10022; &nbsp; &#10022; &nbsp; &#10022;</div>
    <p class="no-indent">Quando olho para a Patrícia de catorze anos, sinto uma ternura enorme. Ela não sabia o que estava construindo. Mas estava construindo. Cada dia. Cada hora. Cada escolha difícil que parecia pequena mas era, na verdade, uma pedra preciosa sendo lapidada em silêncio.</p>
  </div>
  <div class="page-num right">15</div>
</div>

<!-- CAP 1 P4 -->
<div class="page page-cream">
  <div class="running-head right">A Joia que Sou</div>
  <div class="body-text">
    <p>Tem uma pergunta que me fazem frequentemente em entrevistas: "O que você diria para a Patrícia de catorze anos?" E eu sempre respondo da mesma forma: não diria nada. Porque qualquer palavra de conselho que eu desse poderia distraí-la do caminho que estava percorrendo. Ela precisava viver tudo aquilo exatamente como viveu. Precisava da dureza e da beleza em igual medida.</p>
    <p>Mas se eu pudesse sussurrar uma coisa, só uma, seria esta: "Você está no lugar certo. O que parece pesado agora é o que vai te fazer leve mais tarde. Continue."</p>
    <p>O Brasil é um país que não facilita o caminho de quem começa de baixo. As estruturas são desiguais, as oportunidades são distribuídas com injustiça, e a narrativa do mérito muitas vezes ignora as condições de partida. Eu reconheço isso. Eu sei que tive sorte em algumas encruzilhadas, sorte que outros não têm. E exatamente por isso nunca romantizo a pobreza nem confundo esforço com privilégio.</p>
    <p>O que romantizo — e sem culpa — é a garra. A garra não é produto de classe social. A garra é uma escolha que se renova todos os dias, independentemente de onde você começou. E a minha garra começou a ser forjada aos catorze anos, em Goiânia, num emprego de menor aprendiz que parecia pequeno mas era, na verdade, o início de um legado.</p>
    <div class="pull-quote">
      <p>"Vivendo minha melhor fase de mulher. Com 46 anos, empresária, mãe, esposa e filha. Tenho tudo que sempre sonhei. Desejo que você, mulher, possa contemplar o melhor dessa terra."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
    <p>Esse legado tem nome: Herreira. Mas tem também um fundamento mais antigo, mais silencioso, que nenhum logotipo representa: o caráter de uma menina que escolheu o trabalho antes de saber exatamente por quê.</p>
  </div>
  <div class="page-num right">16</div>
</div>

<!-- CAP 2 DIVISÓRIA -->
<div class="page page-section">
  <div class="section-wrap">
    <div class="section-num">02</div>
    <div class="section-label">Capítulo Dois</div>
    <h2 class="section-title">O Fogo que Forja</h2>
    <p class="section-desc">Os anos de aprendizado, de luta, de ser moldada pela vida. A descoberta da beleza nos lugares inesperados. A semente do empreendedorismo germina em silêncio.</p>
  </div>
  <div class="page-num center" style="color:var(--gold);">17</div>
</div>

<!-- CAP 2 P1 -->
<div class="page page-cream">
  <div class="chapter-num-big">02</div>
  <div class="chapter-header">
    <div class="chapter-label">Capítulo 2</div>
    <h2 class="chapter-title" style="font-style:italic;">O Fogo que Forja</h2>
  </div>
  <div class="body-text">
    <p class="drop-cap">Existe um período da vida que a maioria das biografias resume em poucas linhas. É o período entre o início e o grande salto — os anos de formação que parecem sem história porque ainda não têm desfecho. Mas é justamente ali, naquele intervalo silencioso, que tudo se decide. É ali que o fogo trabalha.</p>
    <p>Entre os meus anos de aprendiz e a fundação da Herreira, em agosto de 2008, passei por uma travessia. Uma travessia de descobertas sobre mim mesma, sobre o mundo, sobre o tipo de mulher e de profissional que eu queria ser. Estudei na ESPM — uma das mais respeitadas escolas de comunicação e marketing do Brasil. Aprofundei minha compreensão sobre marcas, sobre o que faz uma empresa comunicar com verdade, sobre a diferença entre vender um produto e construir uma identidade.</p>
    <p>Mas o aprendizado mais poderoso não veio das salas de aula. Veio da vida. Veio dos empregos que tive antes da Herreira, das empresas por dentro das quais trabalhei, das pessoas que me ensinaram o que não fazer tanto quanto as que me ensinaram o que fazer.</p>
    <div class="pull-quote">
      <p>"Em um mundo que exige presença constante, desconectar para se reconectar é um ato de elegância."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
  </div>
  <div class="page-num right">18</div>
</div>

<!-- CAP 2 P2 -->
<div class="page page-cream">
  <div class="running-head right">A Joia que Sou</div>
  <div class="body-text">
    <p>Foi nesse período que minha relação com a beleza se aprofundou. Sempre havia sentido uma atração pelo belo — aquela menina na soleira da porta, hipnotizada pela luz nas folhas, já sabia disso. Mas foi na vida adulta que comecei a entender que beleza não é ornamento. É linguagem.</p>
    <p>A beleza comunica o que as palavras não alcançam. Uma peça de joia bem desenhada diz à mulher que a usa: você merece isso. Você é especial. Você carrega em si algo que vale a pena ser celebrado. Essa mensagem — silenciosa, elegante, poderosa — começou a me fascinar de um jeito diferente. Não apenas como consumidora, mas como criadora.</p>
    <p>Comecei a desenhar. Não de forma sistemática, não com pretensões profissionais imediatas. Desenhava porque precisava. Porque havia formas dentro de mim que queriam existir no mundo e que não encontravam outra saída senão o papel. Linhas curvas que me lembravam a leveza de uma pena. Estruturas geométricas que carregavam a solidez que eu queria sentir dentro de mim. Texturas que evocavam paisagens do cerrado, da terra goiana, da luz que eu havia aprendido a amar desde criança.</p>
    <p>Ninguém via esses desenhos. Durante anos, foram meus. Um segredo não de vergonha mas de gestação — a proteção instintiva que se dá a algo que ainda está sendo formado e que o olhar do mundo poderia romper antes do tempo.</p>
    <div class="pull-quote">
      <p>"É muitas vezes na imprevisibilidade que se vive o inesperado."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
  </div>
  <div class="page-num right">19</div>
</div>

<!-- CAP 2 P3 -->
<div class="page page-cream">
  <div class="running-head">Capítulo 2 — O Fogo que Forja</div>
  <div class="body-text">
    <p>O fogo que forja não é apenas o da dificuldade. É também o da paixão. E havia paixão em tudo o que eu estava aprendendo sobre o mercado de semi-joias, sobre Goiânia como polo produtor, sobre o que as mulheres brasileiras desejavam quando se ornamentavam. Havia um abismo entre o que estava disponível e o que elas mereciam. E eu comecei a sentir, com uma clareza que me assustava um pouco, que era eu quem deveria preencher esse abismo.</p>
    <p>Semi-joia não é joia de segunda categoria. É uma categoria própria, com seus materiais, sua técnica, sua identidade. O banho de ouro 18k, o uso de pedras naturais e sintéticas combinadas com precisão, o acabamento que precisa ser impecável porque o produto vai tocar o corpo de uma mulher real, em um dia real da vida dela. Aprendi a ver a semi-joia com o mesmo respeito com que um joalheiro vê o ouro maciço. Essa mudança de perspectiva seria o fundamento da Herreira.</p>
    <p>E então Alexandre entrou na minha vida. E o fogo que já ardia em mim recebeu o sopro de alguém que acreditou nele antes mesmo de ver a chama.</p>
    <div class="ornament">&#10022; &nbsp; &#10022; &nbsp; &#10022;</div>
    <p class="no-indent">O fogo que forja nunca é confortável enquanto você está dentro dele. A transformação dói. A incerteza pesa. Os dias em que você não sabe se o que está construindo vai durar são mais numerosos do que os dias de clareza. Mas o que eu entendi — o que o fogo me ensinou — é que a dor da transformação e a dor do estagnamento têm pesos diferentes. A dor do estagnamento não gera nada. A dor da transformação gera ouro.</p>
  </div>
  <div class="page-num right">20</div>
</div>

<!-- CAP 3 DIVISÓRIA -->
<div class="page page-section">
  <div class="section-wrap">
    <div class="section-num">03</div>
    <div class="section-label">Capítulo Três</div>
    <h2 class="section-title">Alexandre: o homem que viu antes de mim</h2>
    <p class="section-desc">O encontro com Alexandre Caramaschi. O parceiro que acreditou antes dela. A vida construída em dois antes do negócio construído em conjunto.</p>
  </div>
  <div class="page-num center" style="color:var(--gold);">21</div>
</div>

<!-- CAP 3 P1 -->
<div class="page page-cream">
  <div class="chapter-num-big">03</div>
  <div class="chapter-header">
    <div class="chapter-label">Capítulo 3</div>
    <h2 class="chapter-title" style="font-style:italic;">Alexandre: o homem que viu antes de mim</h2>
  </div>
  <div class="body-text">
    <p class="drop-cap">Existe um tipo de pessoa raro no mundo. Não é a pessoa que te elogia quando você brilha — essa é fácil de encontrar. O tipo raro é aquele que enxerga o brilho antes que ele exista, que aposta no potencial antes de ver o resultado, que sustenta o que é frágil até que se torne forte. Alexandre Caramaschi é esse tipo de pessoa. E ele chegou na minha vida no momento exato em que eu mais precisava ser vista.</p>
    <p>Eu poderia escrever capítulos inteiros sobre como nos conhecemos, sobre os primeiros olhares, sobre as conversas que foram longas porque nenhum dos dois queria que terminassem. Mas o que mais importa sobre o início da nossa história não é a narrativa romântica — embora ela exista e seja bonita. O que mais importa é o que ele foi capaz de ver em mim que eu ainda não conseguia ver em mim mesma.</p>
    <p>Alexandre não apenas me amou. Ele me leu. Com aquela atenção rara de quem está realmente presente, sem pressa, sem agenda própria de como a outra pessoa deveria ser. Ele via os desenhos que eu fazia sem pretensão. Via a forma como eu falava sobre beleza, sobre peças, sobre o que me faltava no mercado. Via a urgência nos meus olhos quando discutia sobre o que as mulheres mereciam e o que não recebiam.</p>
    <div class="pull-quote">
      <p>"Quero exercer minha gratidão ao único homem que enxergou em mim um potencial que nem eu mesma conseguia ver. Obrigada por acreditar antes, por sustentar quando ainda era frágil."</p>
      <cite>Patrícia Caramaschi</cite>
    </div>
  </div>
  <div class="page-num right">22</div>
</div>

<!-- CAP 3 P2 -->
<div class="page page-cream">
  <div class="running-head right">A Joia que Sou</div>
  <div class="body-text">
    <p>E um dia ele me disse: "Você deveria criar sua própria marca." Simples assim. Sem condição, sem avaliação de risco, sem plano de negócios em mão. Uma afirmação que era, ao mesmo tempo, a coisa mais desafiadora e a mais libertadora que alguém já havia dito para mim.</p>
    <p>A síndrome do impostor é real. Ela visita toda mulher que ousa querer mais do que o esperado. Ela visita especialmente aquelas que não vieram de famílias de empresários, que não têm sobrenome que abre portas, que não tiveram rede de networking herdada. Ela dizia: "Quem é você para criar uma marca? Que conhecimento você tem? Que capital você tem? O que te faz diferente de todos que já tentaram e fracassaram?"</p>
    <p>Alexandre não silenciava o impostor gritando argumentos contrários. Ele fazia algo mais sofisticado: continuava me tratando como quem já havia chegado lá. Não me tratava como potencial. Me tratava como realidade. E há uma diferença sutil mas devastadoramente poderosa entre as duas formas de amor.</p>
    <p>Construímos a vida juntos antes de construir o negócio. E foi essa sequência que tornou tudo possível. O casamento veio antes da empresa. A família — Julie, Arthur — veio com o crescimento da empresa. E em cada etapa, Alexandre foi o mesmo: presente, firme, generoso com a crença que depositava em mim.</p>
    <div class="pull-quote">
      <p>"Você sempre me esticou. Sempre me empurrou um pouco além do que eu achava ser meu limite. E cada vez que eu chegava ao ponto que você indicava, descobria que havia mais."</p>
      <cite>Patrícia Caramaschi, sobre Alexandre</cite>
    </div>
  </div>
  <div class="page-num right">23</div>
</div>

<!-- CAP 3 P3 -->
<div class="page page-cream">
  <div class="running-head">Capítulo 3 — Alexandre</div>
  <div class="body-text">
    <p>Há uma armadilha comum nas narrativas sobre mulheres empreendedoras: ou o parceiro é completamente invisível na história, apagado por uma retórica de independência radical, ou é apresentado como o herói que salvou a empreendedora de si mesma. Nenhuma das duas versões é honesta.</p>
    <p>A minha versão honesta é esta: sou uma mulher que construiu uma empresa, que toma decisões sozinha, que desenha, que lidera, que erra e acerta com suas próprias mãos. E, ao mesmo tempo, sou uma mulher que tem ao seu lado um homem que nunca tentou diminuir nada disso. Pelo contrário: que o amplificou.</p>
    <p>O amor verdadeiro não compete com a ambição da mulher que você ama. O amor verdadeiro cria espaço para que essa ambição respire, cresça, e se torne exatamente o que precisa ser. Alexandre entendeu isso de uma forma que eu nunca precisei explicar. Ele simplesmente soube.</p>
    <p>Quando a Herreira teve seus primeiros momentos de crise — e teve; toda empresa tem — foi Alexandre que ficou do meu lado às duas da manhã, analisando planilhas, pensando em soluções, nunca dizendo "eu te avisei" quando as coisas davam errado, sempre dizendo "o que fazemos agora" quando o problema aparecia. Essa postura não é trivial. Ela é, na verdade, rara como uma pedra preciosa de alta qualidade.</p>
    <div class="ornament">&#10022; &nbsp; &#10022; &nbsp; &#10022;</div>
    <p class="no-indent">Não sou uma mulher que esconde que tem marido para parecer mais independente. Não tenho esse pudor porque não tenho essa insegurança. Tenho orgulho da família que construímos. Tenho orgulho do amor que escolhemos todos os dias. E tenho certeza de que a Herreira não seria o que é sem a base que esse amor oferece.</p>
  </div>
  <div class="page-num right">24</div>
</div>

<!-- CAP 3 P4 -->
<div class="page page-cream">
  <div class="running-head right">A Joia que Sou</div>
  <div class="body-text">
    <p>Há uma frase que escrevi para Alexandre numa data que não preciso nomear para que você entenda o seu peso. Disse: "Obrigada por acreditar antes, por sustentar quando ainda era frágil e por nunca tentar diminuir quem eu estava me tornando."</p>
    <p>Essa frase resume algo que poucas mulheres têm palavras para articular: a diferença entre um parceiro que tolera sua ambição e um parceiro que a celebra. Entre um que aceita o seu sucesso e um que faz parte da sua torcida mais apaixonada. Alexandre é o segundo tipo. E isso mudou tudo.</p>
    <p>Quando falo para mulheres jovens sobre construir uma carreira, sobre criar uma empresa, sobre ter família e negócio ao mesmo tempo, uma das coisas que digo sempre é: escolha bem quem está ao seu lado. Não porque você precisa de permissão — você nunca precisa de permissão. Mas porque a jornada é longa e há momentos em que a única coisa que sustenta você em pé é saber que há alguém em casa que acredita.</p>
    <p>Alexandre Caramaschi foi e é, para mim, esse alguém. Ele é o silêncio que sustenta o barulho da empresa, a estabilidade que torna possível o risco, o lar que faz da aventura um lugar seguro para se arriscar.</p>
    <p>E se este livro existe — se eu tive coragem de escrever sobre a joia que sou — é também porque ele me ensinou, antes de qualquer outra coisa, que eu merecia ser vista. Que merecia ocupar espaço. Que o que eu tinha dentro de mim não era demais. Era exatamente o suficiente para construir algo extraordinário.</p>
  </div>
  <div class="page-num right">25</div>
</div>

`;
fs.appendFileSync('C:/Sandyboxclaude/a-joia-que-sou.html', html, 'utf8');
console.log('chunk1 done');
