# 🌍 GeoGuard – Estações Móveis de Energia Limpa com IoT e Aplicativo

Projeto desenvolvido para o **Global Solution** do curso de Análise e Desenvolvimento de Sistemas, com foco em sustentabilidade, energia limpa e tecnologias inteligentes.

## 🎓 Integrantes do Grupo
- Guilherme Alves  
-  Guilherme Alves Pedroso - RM555357
-  João Vitor Silva Nascimento - RM554694
-  Rafael Souza Bezerra - 557888

## 📺 Apresentação em Vídeo
Assista à nossa explicação completa sobre o projeto no YouTube:  
🔗 [https://www.youtube.com/watch?v=SEU_VIDEO_ID](https://www.youtube.com/watch?v=SEU_VIDEO_ID)

## 💡 Descrição da Solução

**GeoGuard** é uma solução inovadora que utiliza **estações móveis de geração de energia limpa** equipadas com sensores IoT, conectividade inteligente e um aplicativo mobile para monitoramento e controle remoto.

A proposta busca **democratizar o acesso à energia sustentável**, especialmente em situações emergenciais, através de unidades autônomas que podem ser transportadas e supervisionadas remotamente.

### 🔧 Arquitetura do Sistema

#### 1. Estação Móvel de Energia
- **Fontes:** Painéis solares e geradores eólicos.
- **Armazenamento:** Baterias inteligentes.
- **Sensores IoT:** Temperatura, umidade, carga da bateria, potência gerada/consumida, GPS e integridade física.

#### 2. Comunicação IoT
- Microcontroladores como ESP32, Arduino MKR ou Raspberry Pi.
- Transmissão de dados via protocolo **MQTT** ou **HTTP**.

#### 3. Plataforma em Nuvem
- Banco de dados (Firebase ou AWS DynamoDB).
- Processamento inteligente de dados com detecção de falhas.
- API RESTful para integração com o aplicativo.

#### 4. Aplicativo Mobile
Desenvolvido em **React Native** ou **Flutter**, com:
- Monitoramento em tempo real de geração e consumo.
- Notificações automáticas (falhas, bateria baixa, intrusão).
- Geolocalização das estações.
- Controle remoto (ligar/desligar cargas).
- Histórico de dados e relatórios interativos.
- Suporte a múltiplos usuários com diferentes níveis de acesso.

### 🔄 Fluxo de Funcionamento
1. Coleta de dados pelos sensores.
2. Transmissão dos dados à nuvem via MQTT.
3. Armazenamento e processamento inteligente.
4. Interação com o app para visualização e controle.
5. Ações automatizadas locais em caso de emergência.

### 🧠 Tecnologias Utilizadas
- **Hardware:** ESP32, Raspberry Pi, sensores INA219, DHT22, GPS NEO-6M.
- **Comunicação:** MQTT, LoRa, GSM.
- **Back-end:** Node.js / FastAPI, Firebase, AWS.
- **App:** React Native / Flutter.
- **Dashboards:** Grafana, Plotly.

### ✅ Benefícios
- Monitoramento inteligente e remoto.
- Redução de custos com manutenção preditiva.
- Segurança energética e física.
- Aplicativo moderno e fácil de usar.
- Escalabilidade para múltiplas estações.

---

Desenvolvido com propósito, tecnologia e impacto sustentável.  
**GeoGuard: Protegendo energia limpa em qualquer lugar.**
