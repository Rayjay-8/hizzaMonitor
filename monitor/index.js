const express = require('express');

// const { queryOracle, queryTempoFila, queryTamanhoFila } = require('./database');

const app = express();
const port = 5000;

const record_log = []

// async function sendMetrics() {
//     try {
//       // const rows = await queryOracle();
//       // const rows = []
        
//       const rows = [
//           [
//               1990375,
//               'CLIENTE',
//               '3202',
//               '2024-07-19T15:03:41.000Z',
//               'N',
//               null,
//               null,
//               'DB1',
//               null,
//               null
//             ],
//             [
//               1990376,
//               'SETOR_COMERCIAL',
//               '3202',
//               '2024-07-19T15:03:41.000Z',
//               'N',
//               null,
//               null,
//               'DB1',
//               null,
//               null
//             ]
//       ]
      
//       // const tamanhoFila = await queryTamanhoFila(rows.length)

//       console.log('Dados enviados para o Prometheus Pushgateway com sucesso.');
//       return tamanhoFila
//     } catch (err) {
//       console.error('Erro ao enviar métricas:', err);
//     }
//   }

function getRecordCount() {
  // Simular a contagem de registros com um número aleatório
  const recordCount = Math.floor(Math.random() * 41);
  const timestamp = new Date().toISOString();
  
  const objeto = [
      [
          1990375,
          'CLIENTE',
          '3202',
          '2024-07-19T15:03:41.000Z',
          'N',
          null,
          null,
          'DB1',
          null,
          null
      ],
      [
          1990376,
          'SETOR_COMERCIAL',
          '3202',
          '2024-07-19T15:03:41.000Z',
          'N',
          null,
          null,
          'DB1',
          null,
          null
      ]
  ];

  // Adiciona a entrada ao log
  recordLog.push({ Time: timestamp, count: recordCount, objeto: objeto });
  return recordCount;
}

app.get('/record', (req, res) => {
  get_record_count()

  res.json({"log": record_log});
});

app.get('/record_last', (req, res) => {
    const ultimo = record_log.at(-1)

    res.json(ultimo.objeto);
});


app.get('/record_count', (req, res) => {
    // sendMetrics();
    res.json({"log": record_log});
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});