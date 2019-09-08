function Sf() {
  this.sS = function(r) {
    for (var t = 0; t < 24; t++) this[String.fromCharCode(97 + t)] = r[t] || 0;
    this.c < 0.01 && (this.c = 0.01);
    var a = this.b + this.c + this.e;
    if (a < 0.18) {
      var e = 0.18 / a;
      (this.b *= e), (this.c *= e), (this.e *= e);
    }
  };
}

function Sx() {
  var r, t, a, e, s, i, n, h, f, c, o, v;
  (this._p = new Sf()),
    (this.r = function() {
      var r = this._p;
      (e = 100 / (r.f * r.f + 0.001)),
        (s = 100 / (r.g * r.g + 0.001)),
        (i = 1 - r.h * r.h * r.h * 0.01),
        (n = -r.i * r.i * r.i * 1e-6),
        r.a || ((o = 0.5 - r.n / 2), (v = 5e-5 * -r.o)),
        (h = 1 + r.l * r.l * (r.l > 0 ? -0.9 : 10)),
        (f = 0),
        (c = 1 == r.m ? 0 : (1 - r.m) * (1 - r.m) * 2e4 + 32);
    }),
    (this.t = function() {
      this.r();
      var e = this._p;
      return (
        (r = e.b * e.b * 1e5),
        (t = e.c * e.c * 1e5),
        (a = e.e * e.e * 1e5 + 12),
        3 * (((r + t + a) / 3) | 0)
      );
    }),
    (this.W = function(u, b) {
      var w = this._p,
        k = 1 != w.s || w.v,
        y = w.v * w.v * 0.1,
        p = 1 + 3e-4 * w.w,
        d = w.s * w.s * w.s * 0.1,
        g = 1 + 1e-4 * w.t,
        S = 1 != w.s,
        l = w.x * w.x,
        m = w.g,
        x = w.q || w.r,
        A = w.r * w.r * w.r * 0.2,
        q = w.q * w.q * (w.q < 0 ? -1020 : 1020),
        M = w.p ? 32 + (((1 - w.p) * (1 - w.p) * 2e4) | 0) : 0,
        _ = w.d,
        U = w.j / 2,
        j = w.k * w.k * 0.01,
        C = w.a,
        W = r,
        z = 1 / r,
        B = 1 / t,
        D = 1 / a,
        E = (5 / (1 + w.u * w.u * 20)) * (0.01 + d);
      E > 0.8 && (E = 0.8), (E = 1 - E);
      for (
        var F,
          G,
          H,
          I,
          J,
          K,
          L = !1,
          N = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0,
          T = 0,
          V = 0,
          X = 0,
          Y = 0,
          Z = 0,
          $ = new Array(1024),
          rr = new Array(32),
          tr = $.length;
        tr--;

      )
        $[tr] = 0;
      for (tr = rr.length; tr--; ) rr[tr] = 2 * Math.random() - 1;
      for (tr = 0; tr < b; tr++) {
        if (L) return tr;
        if (
          (M && ++Y >= M && ((Y = 0), this.r()),
          c && ++f >= c && ((c = 0), (e *= h)),
          (e *= i += n) > s && ((e = s), m > 0 && (L = !0)),
          (G = e),
          U > 0 && ((Z += j), (G *= 1 + Math.sin(Z) * U)),
          (G |= 0) < 8 && (G = 8),
          C || ((o += v) < 0 ? (o = 0) : o > 0.5 && (o = 0.5)),
          ++O > W)
        )
          switch (((O = 0), ++N)) {
            case 1:
              W = t;
              break;
            case 2:
              W = a;
          }
        switch (N) {
          case 0:
            P = O * z;
            break;
          case 1:
            P = 1 + 2 * (1 - O * B) * _;
            break;
          case 2:
            P = 1 - O * D;
            break;
          case 3:
            (P = 0), (L = !0);
        }
        x && ((H = 0 | (q += A)) < 0 ? (H = -H) : H > 1023 && (H = 1023)),
          k && p && ((y *= p) < 1e-5 ? (y = 1e-5) : y > 0.1 && (y = 0.1)),
          (K = 0);
        for (var ar = 8; ar--; ) {
          if (++V >= G && ((V %= G), 3 == C))
            for (var er = rr.length; er--; ) rr[er] = 2 * Math.random() - 1;
          switch (C) {
            case 0:
              J = V / G < o ? 0.5 : -0.5;
              break;
            case 1:
              J = 1 - (V / G) * 2;
              break;
            case 2:
              J =
                0.225 *
                  (((J =
                    1.27323954 *
                      (I = 6.28318531 * ((I = V / G) > 0.5 ? I - 1 : I)) +
                    0.405284735 * I * I * (I < 0 ? 1 : -1)) < 0
                    ? -1
                    : 1) *
                    J *
                    J -
                    J) +
                J;
              break;
            case 3:
              J = rr[Math.abs(((32 * V) / G) | 0)];
          }
          k &&
            ((F = T),
            (d *= g) < 0 ? (d = 0) : d > 0.1 && (d = 0.1),
            S ? ((R += (J - T) * d), (R *= E)) : ((T = J), (R = 0)),
            (Q += (T += R) - F),
            (J = Q *= 1 - y)),
            x && (($[X % 1024] = J), (J += $[(X - H + 1024) % 1024]), X++),
            (K += J);
        }
        (K *= 0.125 * P * l),
          (u[tr] = K >= 1 ? 32767 : K <= -1 ? -32768 : (32767 * K) | 0);
      }
      return b;
    });
}
var synth = new Sx();
window.jsfxr = function(r) {
  synth._p.sS(r);
  var t = synth.t(),
    a = new Uint8Array(4 * (((t + 1) / 2) | 0) + 44),
    e = 2 * synth.W(new Uint16Array(a.buffer, 44), t),
    s = new Uint32Array(a.buffer, 0, 44);
  (s[0] = 1179011410),
    (s[1] = e + 36),
    (s[2] = 1163280727),
    (s[3] = 544501094),
    (s[4] = 16),
    (s[5] = 65537),
    (s[6] = 44100),
    (s[7] = 88200),
    (s[8] = 1048578),
    (s[9] = 1635017060),
    (s[10] = e),
    (e += 44);
  for (
    var i = 0,
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      h = 'data:audio/wav;base64,';
    i < e;
    i += 3
  ) {
    var f = (a[i] << 16) | (a[i + 1] << 8) | a[i + 2];
    h += n[f >> 18] + n[(f >> 12) & 63] + n[(f >> 6) & 63] + n[63 & f];
  }
  return h;
};

(function() {
  /**
   * Capturar eventos del DoM
   * @param {*} target
   * @param {*} type
   * @param {*} callback
   * @param {*} parameter
   */
  const $on = (target, type, callback, parameter = {}) => {
    target.addEventListener(type, callback, parameter);
  };

  /**
   * Imprimir data en el HTML
   * @param {*} elemet
   * @param {*} html
   */
  const setHtml = (elemet, html) => {
    elemet.innerHTML = html;
  };

  // Para capturar los valores en el doom
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const SIZE_GRID = 30;
  const MAX_FIGURES = 4;
  const CANVAS_SIZE = 350;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const offset = { x: 25, y: 25 };
  const emojis = [
    "😁",
    "🙄",
    "😝",
    "😴",
    "🤫",
    "😮",
    "🤬",
    "🥺",
    "😭",
    "😩",
    "😡",
    "🤕"
  ];
  const PLAYERS = [];
  const CACHE_KEY = 'bck-ship';
  const tokenByBrowser = guid();
  const playersScore = [0, 0];
  const supportedShare = 'share' in navigator;
  const sounds = {
    btn: [
      2,
      0.0853,
      0.01,
      0.3919,
      0.478,
      0.5858,
      ,
      -0.0461,
      -0.0022,
      -0.3519,
      0.7718,
      0.7069,
      0.6211,
      -0.9396,
      0.0392,
      ,
      -0.7729,
      -0.0683,
      0.924,
      0.0077,
      -0.4924,
      0.0162,
      -0.1627,
      1
    ],
    exp: [
      3,
      ,
      0.5008,
      0.3815,
      0.9492,
      0.065,
      ,
      0.0249,
      0.1806,
      ,
      0.7648,
      -0.6633,
      ,
      ,
      0.6718,
      ,
      0.1516,
      -0.1139,
      0.9911,
      -0.2403,
      0.4343,
      ,
      -0.1719,
      1
    ],
    snk: [
      3,
      0.0042,
      0.2846,
      0.0452,
      0.9705,
      0.846,
      ,
      ,
      -0.5873,
      0.1207,
      0.6831,
      -0.2024,
      0.8887,
      0.5369,
      -0.0036,
      ,
      -0.0019,
      0.1565,
      0.1598,
      0.0135,
      ,
      0.1834,
      -0.4218,
      1
    ],
    wat: [
      2,
      ,
      0.0762,
      0.0007,
      0.4949,
      0.5714,
      ,
      -0.0704,
      -0.9289,
      ,
      0.3492,
      -0.6533,
      0.5622,
      ,
      ,
      0.2871,
      0.5904,
      -0.0797,
      0.9646,
      ,
      -0.0066,
      0.0002,
      -0.0794,
      1
    ],
    sad: [
      0,
      ,
      0.3972,
      0.0475,
      0.3859,
      0.5226,
      ,
      0.0795,
      ,
      0.1297,
      0.2918,
      0.0228,
      0.0057,
      0.218,
      -0.0016,
      ,
      ,
      -0.0165,
      1,
      0.0216,
      0.0284,
      ,
      ,
      1
    ],
    sno: [
      2,
      0.0012,
      0.0473,
      0.1883,
      0.9943,
      0.9259,
      ,
      ,
      0.0207,
      -0.0001,
      ,
      -0.963,
      0.1687,
      ,
      0.3194,
      0.07,
      -0.0707,
      -0.5072,
      0.8623,
      -0.2341,
      0.4199,
      0.0194,
      ,
      1
    ],
    won: [
      0,
      0.566,
      0.4164,
      0.0784,
      0.8831,
      0.5906,
      ,
      -0.0074,
      -0.379,
      ,
      -0.7858,
      -0.6032,
      ,
      0.4907,
      -0.5917,
      0.5149,
      0.6158,
      -0.0026,
      0.7473,
      -0.0226,
      0.0241,
      ,
      -0.4209,
      1
    ]
  };

  let playerTurn = 0; // Determina quién tiene el turno
  let activatedEvents = true;
  let animation;
  let shipsFoundIA = [];
  let playIA = false;
  let playOnline = false;
  let socket;
  let connectedSocket = false; //Para indicar si se ha conectado el socket...
  let gameOver = false;
  let actualPlayer = 0;
  let room = '';
  let intervalAtack;
  let intervalSonar;
  let intervalAtackIA;
  let intervalRandomAtack;
  let intervalEmojis = [];
  let withSounds = true;

  /**
   * Actualiza los datos en la cache
   * @param {*} keys
   * @param {*} values
   */
  const updateCache = (keys, values) => {
    const cache = getCache();
    let update = false;
    const copyCache = { ...cache };
    keys.forEach((k, i) => {
      if (cache[k] !== null) {
        update = true;
        copyCache[k] = values[i];
      }
    });

    if (update) {
      saveCache(copyCache);
    }
  };

  /**
   * Guarda información en la cache
   * @param {*} data
   */
  const saveCache = data => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  };

  /**
   * Devuelve los datos que están en la cache
   */
  const getCache = () => {
    const cache = localStorage.getItem(CACHE_KEY) || '';
    return cache !== '' ? JSON.parse(cache) : {};
  };

  /**
   * Calcula cual es el rango que tiene la figura...
   * @param {*} row
   * @param {*} col
   * @param {*} size
   * @param {*} direction
   */
  const figureRange = (row, col, size, direction) => {
    const boardSize = DIMENSION_BOARD - 1;
    const returnValues = [
      direction ? row + (size - 1) : row,
      !direction ? col + (size - 1) : col,
      0, // La posición inicia del rango
      0, // La posición final del rango
      false
    ];

    if (returnValues[0] <= boardSize && returnValues[1] <= boardSize) {
      returnValues[4] = true; // Si está dentro del board

      // Identifica los valores rango de la figura
      returnValues[2] = [row - 1, col - 1];
      returnValues[3] = [
        (direction ? returnValues[0] : row) + 1,
        (!direction ? returnValues[1] : col) + 1
      ];
    }

    return returnValues;
  };

  /**
   * Establece una posición aleatoria de una figura en el escenario
   * @param {*} size
   * @param {*} board
   */
  const locateFigure = (size, board) => {
    const boardSize = DIMENSION_BOARD - 1;
    let position = [];

    do {
      let isValid = false;
      const direction = randomNumber(0, 1);
      const row = randomNumber(0, boardSize);
      const col = randomNumber(0, boardSize);
      const [
        finalRow,
        finalCol,
        initialOverlay,
        finalOverlay,
        isInside
      ] = figureRange(row, col, size, direction);

      if (isInside) {
        let overlay = false;
        for (let i = initialOverlay[0]; i <= finalOverlay[0]; i++) {
          for (let c = initialOverlay[1]; c <= finalOverlay[1]; c++) {
            // Validar que este dentro del board
            if (i >= 0 && i <= boardSize && c >= 0 && c <= boardSize) {
              if (board[i][c] !== 0) {
                overlay = true;
                break;
              }
            }
          }

          if (overlay) {
            break;
          }
        }

        if (!overlay) {
          isValid = true;
        }
      }

      if (isValid) {
        /*
          direction de giro del barco
          Fila
          Columna
          Fila final
          Columna filal, 
          */
        position = [
          randomNumber(!direction ? 1 : 3, !direction ? 2 : 4),
          row,
          col,
          finalRow,
          finalCol
        ];
        break;
      }
    } while (1);

    return position;
  };

  /**
   * Crea un nuevo board, estableciendo la posición de las figuras en la misma
   * @param {*} showFigure
   */
  const createBoard = (showFigure = 1) => {
    const board = [...new Array(DIMENSION_BOARD)].map(() =>
      new Array(DIMENSION_BOARD).fill(0)
    );
    const figures = [];

    // // Empezar a ubicar los elementos en el escenario...
    for (let c = 1, initial = MAX_FIGURES; c <= MAX_FIGURES; c++, initial--) {
      for (let d = 1; d <= c; d++) {
        const figure = locateFigure(initial, board);
        for (let r = figure[1]; r <= figure[3]; r++) {
          for (let l = figure[2]; l <= figure[4]; l++) {
            board[r][l] = 1;
          }
        }
        /*
          0 : Muestra figura
          1 : Tamaño de la figura
          2 : Giro
          3 : Fila
          4 : Columba
          5 : Fila final
          6 : Columna final
          */
        figures.push([showFigure, initial, ...figure]);
      }
    }

    return { board, figures };
  };

  /**
   * Renderiza el board donde se establece la posición de las figuras del jugador
   */
  const renderBoardbase = () => {
    canvases[0][1].clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    renderGrid(canvases[0][1]);
    renderShips(PLAYERS[0], canvases[0][1]);
  };

  /**
   * Renderiza las boardas de los juagdores
   * @param {*} numPlayer
   * @param {*} ctx
   */
  const renderBoards = (numPlayer, ctx) => {
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    renderGrid(ctx);
    renderShips(PLAYERS[numPlayer], ctx);
    renderAtacks(PLAYERS[numPlayer], ctx);
  };

  /**
   * Crear la grilla
   */
  const renderGrid = ctx => {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#b5e5ee';
    for (let i = 0; i < DIMENSION_BOARD; i++) {
      for (let c = 0; c < DIMENSION_BOARD; c++) {
        if (i === 0) {
          ctx.font = 'bold 15px Verdana, sans-serif';
          ctx.fillStyle = '#339';
          ctx.fillText(
            String.fromCharCode(65 + c),
            offset.x + SIZE_GRID * c + 10,
            12
          );
          ctx.font = 'bold 13px Verdana, sans-serif';
          ctx.fillText(c + 1, 0, offset.y + SIZE_GRID * c + 20);
        }

        ctx.rect(
          offset.x + SIZE_GRID * i,
          offset.y + SIZE_GRID * c,
          SIZE_GRID,
          SIZE_GRID
        );
      }
    }
    ctx.stroke();
  };

  /**
   * Para renderizar los barcos
   * @param {*} player
   * @param {*} ctx
   */
  const renderShips = (player, ctx) => {
    const ships = player[1];
    ctx.lineWidth = 5;
    for (let i = 0; i < ships.length; i++) {
      const [showFigure, size, ...positionMatrix] = ships[i];
      const [turn, row, col] = positionMatrix;
      if (showFigure) {
        ctx.strokeStyle = '#572ecc';
        ctx.beginPath();
        const points = [
          [
            [col * SIZE_GRID, row * SIZE_GRID + SIZE_GRID / 2],
            [col * SIZE_GRID + SIZE_GRID / 2, row * SIZE_GRID],
            [(col + 1) * SIZE_GRID, row * SIZE_GRID],
            [(col + size) * SIZE_GRID, row * SIZE_GRID],
            [(col + size) * SIZE_GRID, (row + 1) * SIZE_GRID],
            [(col + 1) * SIZE_GRID, (row + 1) * SIZE_GRID],
            [col * SIZE_GRID + SIZE_GRID / 2, (row + 1) * SIZE_GRID]
          ],
          [
            [col * SIZE_GRID, row * SIZE_GRID],
            [(col + (size - 1)) * SIZE_GRID, row * SIZE_GRID],
            [(col + (size - 1)) * SIZE_GRID + SIZE_GRID / 2, row * SIZE_GRID],
            [(col + size) * SIZE_GRID, row * SIZE_GRID + SIZE_GRID / 2],
            [
              (col + (size - 1)) * SIZE_GRID + SIZE_GRID / 2,
              (row + 1) * SIZE_GRID
            ],
            [(col + (size - 1)) * SIZE_GRID, (row + 1) * SIZE_GRID],
            [col * SIZE_GRID, (row + 1) * SIZE_GRID]
          ],
          [
            [col * SIZE_GRID + SIZE_GRID / 2, row * SIZE_GRID],
            [col * SIZE_GRID, row * SIZE_GRID + SIZE_GRID / 2],
            [col * SIZE_GRID, (row + 1) * SIZE_GRID],
            [col * SIZE_GRID, (row + size) * SIZE_GRID],
            [(col + 1) * SIZE_GRID, (row + size) * SIZE_GRID],
            [(col + 1) * SIZE_GRID, (row + 1) * SIZE_GRID],
            [(col + 1) * SIZE_GRID, row * SIZE_GRID + SIZE_GRID / 2]
          ],
          [
            [col * SIZE_GRID, row * SIZE_GRID],
            [col * SIZE_GRID, (row + (size - 1)) * SIZE_GRID],
            [col * SIZE_GRID, (row + (size - 1)) * SIZE_GRID + SIZE_GRID / 2],
            [col * SIZE_GRID + SIZE_GRID / 2, (row + size) * SIZE_GRID],
            [
              (col + 1) * SIZE_GRID,
              (row + (size - 1)) * SIZE_GRID + SIZE_GRID / 2
            ],
            [(col + 1) * SIZE_GRID, (row + (size - 1)) * SIZE_GRID],
            [(col + 1) * SIZE_GRID, row * SIZE_GRID]
          ]
        ];

        ctx.beginPath();
        ctx.lineJoin = 'round';
        for (let c = 0; c < points[turn - 1].length; c++) {
          ctx[c === 0 ? 'moveTo' : 'lineTo'](
            offset.x + points[turn - 1][c][0],
            offset.y + points[turn - 1][c][1]
          );
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  };

  /**
   * Muestra los ataques realizados
   * @param {*} player
   * @param {*} ctx
   */
  const renderAtacks = (player, ctx) => {
    const board = player[0];
    ctx.lineWidth = 5;
    for (let i = 0; i < board.length; i++) {
      for (let c = 0; c < board[i].length; c++) {
        if (board[i][c] === 2 || board[i][c] === 3) {
          ctx.strokeStyle = board[i][c] === 2 ? '#f44336' : '#9e9e9e';
          ctx.beginPath();
          ctx.moveTo(
            offset.x + SIZE_GRID * c + (SIZE_GRID - 25),
            offset.y + SIZE_GRID * i + (SIZE_GRID - 25)
          );
          ctx.lineTo(
            offset.x + SIZE_GRID * c + (SIZE_GRID - 5),
            offset.y + SIZE_GRID * i + (SIZE_GRID - 5)
          );
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(
            offset.x + SIZE_GRID * c + (SIZE_GRID - 5),
            offset.y + SIZE_GRID * i + (SIZE_GRID - 25)
          );
          ctx.lineTo(
            offset.x + SIZE_GRID * c + (SIZE_GRID - 25),
            offset.y + SIZE_GRID * i + (SIZE_GRID - 5)
          );
          ctx.stroke();
        }
      }
    }
  };

  /**
   * Establece la animación "shake" al board.
   */
  const shakeBoard = () => {
    // Hacer que el dispositivo vibre
    if ('vibrate' in navigator) {
      navigator.vibrate(500);
    }

    $('#a').classList.add('shake');
    setTimeout(() => {
      $('#a').classList.remove('shake');
    }, 500);
  };

  /**
   * Marca que un barco ha sido destruido, además establece los valores de su alredor
   * Otra cosa que hará es poner que el barco sea visible
   * @param {*} playerAttack
   * @param {*} indexFigure
   * @param {*} indexUI
   */
  const setShipDestroyed = (playerAttack, indexShip, indexUI) => {
    const boardSize = DIMENSION_BOARD - 1;
    $(`#b${indexUI}${indexShip + 1}`).classList.add('sc');
    // Muestra el barco
    PLAYERS[playerAttack][1][indexShip][0] = 1;
    // Sonido que ha hundido el barco
    playSound(sounds.snk);
    checkWinner(playerAttack ? 0 : 1);

    const shipLimits = figureRange(
      PLAYERS[playerAttack][1][indexShip][3],
      PLAYERS[playerAttack][1][indexShip][4],
      PLAYERS[playerAttack][1][indexShip][1],
      !(PLAYERS[playerAttack][1][indexShip][2] <= 2)
    );

    for (let i = shipLimits[2][0]; i <= shipLimits[3][0]; i++) {
      for (let c = shipLimits[2][1]; c <= shipLimits[3][1]; c++) {
        // Validar que este dentro del board
        if (
          i >= 0 &&
          i <= boardSize &&
          c >= 0 &&
          c <= boardSize &&
          PLAYERS[playerAttack][0][i][c] === 0
        ) {
          PLAYERS[playerAttack][0][i][c] = 3;
        }
      }
    }
  };

  /**
   * Valida que jugador ha gando la partida
   * @param {*} numPlayer
   */
  const checkWinner = numPlayer => {
    playersScore[numPlayer]++;
    if (
      playersScore[0] === DIMENSION_BOARD ||
      playersScore[1] === DIMENSION_BOARD
    ) {
      // Determinar el player que ganó...
      const playerWon = playersScore[0] === DIMENSION_BOARD;
      // Se cancela la animación...
      if (intervalAtack) {
        clearInterval(intervalAtack);
      }

      if (intervalAtackIA) {
        clearInterval(intervalAtackIA);
      }

      if (intervalRandomAtack) {
        clearInterval(intervalRandomAtack);
      }

      if (playOnline) {
        emitDataSocket('gO', { room });
        disconnectSocket();
      }
      gameOver = true;
      playSound(sounds[playerWon ? 'won' : 'sad']);
      modal(
        {
          em: playerWon ? '🏆' : '💔',
          txt: playerWon ? 'You won!!' : 'You lose!',
          catxt: 'Home',
          shok: false
        },
        () => {
          main(1);
        }
      );
    }
  };

  /**
   * Función que busca si se destruyó un braco y si es así saber cuál es
   * @param {*} row
   * @param {*} col
   * @param {*} board
   */
  const destroyShip = (row, col, playerAttack) => {
    const [board, figures] = PLAYERS[playerAttack];
    let indexFigure = -1;
    let destroyedShip = false;

    // Identificar la figura
    for (let i = 0; i < figures.length; i++) {
      const direction = !(figures[i][2] <= 2);

      indexFigure = !direction
        ? row === figures[i][3] &&
          row === figures[i][5] &&
          (col >= figures[i][4] && col <= figures[i][6])
          ? i
          : -1
        : row >= figures[i][3] &&
          row <= figures[i][5] &&
          (col === figures[i][4] && col === figures[i][6])
        ? i
        : -1;

      if (indexFigure >= 0) {
        break;
      }
    }

    if (indexFigure >= 0) {
      let counterSize = 0;
      // Buscar los valores que hay en la matriz, de acuerdo a la dirección y tamaño de la figura
      for (let c = 0; c < figures[indexFigure][1]; c++) {
        const direction = !(figures[indexFigure][2] <= 2);
        const rowFigure = figures[indexFigure][3] + (!direction ? 0 : c);
        const colFigure = figures[indexFigure][4] + (!direction ? c : 0);
        counterSize += +(
          (row === rowFigure && col === colFigure) ||
          board[rowFigure][colFigure] === 2
        );
      }

      destroyedShip = counterSize === figures[indexFigure][1];
    }

    return [destroyedShip, indexFigure];
  };

  /**
   * Hará un cronometro para el ataque
   */
  const timerAtack = (playerAttack, idElement, makesAttack = true) => {
    const board = PLAYERS[playerAttack][0];
    $(`#pr${idElement}`).style.width = '100%';
    if (intervalAtack) {
      clearInterval(intervalAtack);
    }
    let counterInterval = 0;

    intervalAtack = setInterval(() => {
      $(`#pr${idElement}`).style.width = 100 - 10 * counterInterval + '%';
      if (counterInterval >= 10) {
        // se debe validar que sea el mismo juador, y además esté online o IA
        clearInterval(intervalAtack);
        if (availablePositions(board) && makesAttack) {
          const [row, col] = getRandomCoordinates(board);
          if (playOnline) {
            emitAttack(playerAttack, row, col);
          }
          sendAttack(playerAttack, row, col);
        }
      }
      counterInterval += 0.1;
    }, 100);
  };

  /**
   * Guarda la última posición exitosa de un ataque hecho por la "IA"
   * @param {*} row
   * @param {*} col
   */
  const saveAttackIA = (row, col) => {
    if (shipsFoundIA.length === 0) {
      shipsFoundIA = [row, col];
    } else {
      shipsFoundIA[0] = row;
      shipsFoundIA[1] = col;
    }
  };

  /**
   * Recibe la posición de un ataque
   * @param {*} playerAttack
   * @param {*} row
   * @param {*} col
   */
  const sendAttack = (playerAttack, row, col) => {
    let hitAttackIA = false;
    // Saber si está libre esa ubicación...
    if (
      PLAYERS[playerAttack][0][row][col] === 0 ||
      PLAYERS[playerAttack][0][row][col] === 1
    ) {
      if (intervalAtack) {
        clearInterval(intervalAtack);
      }
      // Bloquee el canvas para que no pueda enviar otro ataque
      activatedEvents = false;
      // Si se acertó en un barco, se deberá validar si se destruyó totalmente y además indentificar el barco
      if (PLAYERS[playerAttack][0][row][col]) {
        shakeBoard();

        const [destroyedShip, indexFigure] = destroyShip(
          row,
          col,
          playerAttack
        );

        if (destroyedShip) {
          setShipDestroyed(
            playerAttack,
            indexFigure,
            playerAttack === 1 ? 1 : 2
          );

          // Valida si es IA el que está jugado...
          if (playIA) {
            shipsFoundIA = [];
          }
        } else {
          playSound(sounds.exp);
          if (playerTurn === 2 && playIA) {
            hitAttackIA = true;
          }
        }
      } else {
        // Se indica que no destruyó o no encontró parte del barco, por lo que se da el turno al siguiente jugador
        playSound(sounds.wat);
        playerTurn = playerTurn === 1 ? 2 : 1;
        $('#s2').classList[playerTurn === 2 ? 'add' : 'remove']('slide');
      }

      // Establecer en la posición del board el nuevo valor...
      PLAYERS[playerAttack][0][row][col] =
        PLAYERS[playerAttack][0][row][col] === 1 ? 2 : 3;

      if (!gameOver) {
        if (playerTurn === 1) {
          activatedEvents = true;
          timerAtack(1, 1);
        } else {
          // Acá se debe validar si se está jugando VS el PC
          // O que el tiempo se le acabó al usuario...
          if (playIA) {
            // El turno era del jugador 2 y además está en modo IA
            intervalAtackIA = setTimeout(() => {
              if (!hitAttackIA) {
                if (shipsFoundIA.length !== 0) {
                  if (shipsFoundIA[3]) {
                    shipsFoundIA[3].push(shipsFoundIA[2]);
                  } else {
                    shipsFoundIA[3] = [shipsFoundIA[2]];
                  }
                  shipsFoundIA[2] = undefined;
                }
              } else {
                saveAttackIA(row, col);
              }
              randomAtack(0);
            }, 500);
          } else {
            timerAtack(0, 2, false);
          }
        }
      }
    }
  };

  /**
   * Para detectar la figura en la grilla
   * @param {*} x
   * @param {*} y
   */
  const pressBoad = (x, y) => {
    let positionFound = false;
    let position = {};
    for (let i = 0; i < DIMENSION_BOARD; i++) {
      for (let c = 0; c < DIMENSION_BOARD; c++) {
        const coordinateRange = {
          x: {
            start: offset.x + SIZE_GRID * i,
            end: offset.x + (SIZE_GRID * i + SIZE_GRID)
          },
          y: {
            start: offset.y + SIZE_GRID * c,
            end: offset.y + (SIZE_GRID * c + SIZE_GRID)
          }
        };

        const positionMouse = {
          x: x > coordinateRange.x.start && x < coordinateRange.x.end,
          y: y > coordinateRange.y.start && y < coordinateRange.y.end
        };

        if (positionMouse.x && positionMouse.y) {
          position = { c, i };
          positionFound = true;
        }
      }

      if (positionFound) {
        break;
      }
    }

    if (positionFound) {
      if (playOnline) {
        emitAttack(1, position.c, position.i);
      }
      sendAttack(1, position.c, position.i);
    }
  };

  /**
   * Validar si hay posiciones disponibles en el board
   * @param {*} board
   */
  const availablePositions = board => {
    let isAvailable = false;
    for (let i = 0; i < board.length; i++) {
      for (let c = 0; c < board[i].length; c++) {
        if (board[i][c] === 0 || board[i][c] === 1) {
          isAvailable = true;
          break;
        }
      }
      if (isAvailable) {
        break;
      }
    }

    return isAvailable;
  };

  /**
   * Generar coordenadas alatorias
   * @param {*} board
   */
  const getRandomCoordinates = board => {
    const coordinates = [0, 0];
    do {
      coordinates[0] = randomNumber(0, 9);
      coordinates[1] = randomNumber(0, 9);
      if (
        board[coordinates[0]][coordinates[1]] === 0 ||
        board[coordinates[0]][coordinates[1]] === 1
      ) {
        break;
      }
    } while (1);

    return coordinates;
  };

  /**
   * Inferir un ataque teniendo posiciones conocidas.
   * @param {*} board
   */
  const inferAttack = board => {
    const boardSize = DIMENSION_BOARD - 1;
    let newRow = 0;
    let newCol = 0;
    let inferredAttack = false;

    let counterLoop = 0;
    do {
      // :( A veces se queda en un ciclo aleatorio :(
      if (counterLoop >= 100) {
        break;
      }

      const listRandom =
        shipsFoundIA[2] ||
        [1, 2, 3, 4].filter(v => {
          if (shipsFoundIA[3]) {
            for (let i = 0; i < shipsFoundIA[3].length; i++) {
              if (v === shipsFoundIA[3][i]) {
                return false;
              }
            }
          }
          return true;
        });

      const randomDirection = randomNumber(0, listRandom.length - 1);
      const directionCol =
        listRandom[randomDirection] === 1
          ? -1
          : listRandom[randomDirection] === 3
          ? 1
          : 0;

      const directionRow =
        listRandom[randomDirection] === 2
          ? -1
          : listRandom[randomDirection] === 4
          ? 1
          : 0;

      newRow = shipsFoundIA[0] + directionRow;
      newCol = shipsFoundIA[1] + directionCol;

      // Primero saber que no se salga del canvas
      if (
        newRow >= 0 &&
        newRow <= boardSize &&
        newCol >= 0 &&
        newCol <= boardSize
      ) {
        if (board[newRow][newCol] === 2) {
          // En esa posición hay un elemento del barco ya dañado
          shipsFoundIA[0] = newRow;
          shipsFoundIA[1] = newCol;
        } else {
          if (board[newRow][newCol] === 0 || board[newRow][newCol] === 1) {
            shipsFoundIA[2] = [listRandom[randomDirection]];
            inferredAttack = true;
            break;
          }
        }
      }

      if (!inferredAttack) {
        if (listRandom.length === 1) {
          if (!shipsFoundIA[3]) {
            shipsFoundIA[3] = [listRandom[randomDirection]];
          } else {
            shipsFoundIA[3].push(listRandom[randomDirection]);
          }
          shipsFoundIA[2] = undefined;
        }
      }

      counterLoop++;
    } while (1);
    return [newRow, newCol, inferredAttack];
  };

  /**
   * Realiza un lanzamiento aleatorio
   * @param {*} playerAttack
   */
  const randomAtack = playerAttack => {
    intervalRandomAtack = setTimeout(() => {
      const board = PLAYERS[playerAttack][0];
      if (availablePositions(board)) {
        // Si ha encontrado alguna figura, enforcarse en ella
        // Quiere decir que no tiene ningún barco o porción del mismo que haya encontrado...
        let generateRandomCoordinates = playIA
          ? shipsFoundIA.length === 0
          : true;

        if (generateRandomCoordinates) {
          const [row, col] = getRandomCoordinates(board);
          sendAttack(0, row, col);
        }

        if (playIA && shipsFoundIA.length !== 0) {
          let [row, col, inferredAttack] = inferAttack(board);
          if (!inferredAttack) {
            shipsFoundIA = [];
            [row, col] = getRandomCoordinates(board);
          }
          sendAttack(0, row, col);
        }
      }
    }, 1000);
  };

  /**
   * Captura los eventos del mouse y touch
   * @param {*} e
   */
  const eventoCanvas = e => {
    e.stopPropagation();
    e.preventDefault();
    let evento = e;
    if (e.type === 'touchstart') {
      evento = e.touches[0] || e.changedTouches[0];
    }

    const x =
      Math.floor(evento.pageX) - (window.innerWidth - CANVAS_SIZE) / 2 - 2;
    const y =
      Math.floor(evento.pageY) - (window.innerHeight - CANVAS_SIZE) / 2 - 10;

    if (activatedEvents && !gameOver) {
      pressBoad(x, y);
    }
  };

  /**
   * Añade los eventos al elemento
   * @param {*} el
   * @param {*} fn
   * @param  {...any} evts
   */
  const addListenerMulti = (el, fn, ...evts) => {
    for (let i = 0; i < evts.length; i++) {
      $on(el, evts[i], fn, false);
    }
  };

  /**
   * Función que muestra si un sonido ha sido o no activado
   * @param {*} actived
   */
  const activeSounds = (actived = 1) => {
    // Cambiar e ícono que indica si tendrá o no audio.
    withSounds = actived;
    setHtml($('#so'), withSounds ? '🔊' : '🔇');
  };

  /**
   * Realiza el proceso de renderización de las boards en tiempo de juego
   */
  const animateBoards = () => {
    renderBoards(1, canvases[1][1]);
    renderBoards(0, canvases[2][1]);
    animation = requestAnimationFrame(animateBoards);
  };

  /**
   * Reinicia el estado original del juego
   */
  const resetGUI = () => {
    for (let i = 1; i <= DIMENSION_BOARD; i++) {
      $(`#b1${i}`).classList.remove('sc');
      $(`#b2${i}`).classList.remove('sc');
    }

    $('#f').classList.remove('sh-ani');
    $('#bm').classList.remove('sh-ani');
    // Para pasar la información de nuevo a la board base
    const cache = getCache();
    PLAYERS[0][0] = cache.b;
    PLAYERS[0][1] = cache.f;
    // Se reinicia el score de los jugadores.
    playersScore[0] = playersScore[1] = 0;
    gameOver = false; // Indicarq ue el juego no ha terminado...
    // Se indica que no está jugando la IA
    activatedEvents = true; // Para activar de nuevo el canvas
    $('#pr1').style.width = $('#pr2').style.width = '100%';
    $('#pr1').style.display = $('#pr2').style.display = 'block';
    $('#sha').style.display = supportedShare ? 'block' : 'none';

    // Cancela la animación...
    if (animation) {
      // clearInterval(animation);
      cancelAnimationFrame(animation);
    }

    if (intervalAtack) {
      clearInterval(intervalAtack);
    }

    if (intervalAtackIA) {
      clearInterval(intervalAtackIA);
    }

    if (intervalRandomAtack) {
      clearInterval(intervalRandomAtack);
    }
  };

  /**
   * Rendeirza las boards de los juegos cuando se inicia una partida
   */
  const renderBoars = () => {
    requestAnimationFrame(animateBoards);
    if (playIA) {
      $('#pr2').style.display = 'none';
    }
    if (playOnline) {
      $('#bm').classList.add('sh-ani');
    }

    $('#s2').classList[playerTurn === 2 ? 'add' : 'remove']('slide');
    if (playerTurn === 2) {
      activatedEvents = false;

      if (playIA) {
        randomAtack(0);
      } else {
        timerAtack(0, 2, false);
      }
    } else {
      timerAtack(1, 1);
    }
  };

  /**
   * Muestra un emoji enviado por un usuario
   * @param {*} indexEmoji
   * @param {*} direction
   */
  const showEmoji = (indexEmoji, direction) => {
    const indexInterval = direction === 'left' ? 0 : 1;
    const emojiContainer = $(`#em-${direction}`);

    if (intervalEmojis[indexInterval]) {
      clearInterval(intervalEmojis[indexInterval]);
    }

    setHtml(emojiContainer, emojis[indexEmoji]);
    emojiContainer.classList.add('sh');

    intervalEmojis[indexInterval] = setTimeout(() => {
      emojiContainer.classList.remove('sh');
    }, 2000);
  };

  /**
   * Modal para mostrar mensajes en el juego
   * @param {*} param0
   * @param {*} actionButton
   */
  const modal = (
    {
      em = '',
      txt,
      cont = '',
      oktxt = 'OK',
      catxt = 'CANCEL',
      shok = true
    },
    actionButton
  ) => {
    setHtml(
      $('.mo'),`<div id='em'>${em}</div><div id='tm'><h1 class='st'>${txt}</h1></div><div id='tt'>${cont}</div><div class='mbtns'><button id='mok' class='ri'>${oktxt}</button><button id='mca' class='ri'>${catxt}</button></div>`
    );

    // Captura los eventos de los botones
    ['mca', 'mok'].forEach(v => {
      $on($(`#${v}`), 'click', e => {
        playSound(sounds.btn);
        showModal(false);
        if (actionButton) {
          actionButton(e.target.id === 'mok');
        }
      });
    });
    $('#mok').classList[!shok ? 'add' : 'remove']('h');
    showModal();
  };

  /**
   * Muestra ocualta un modal
   * @param {*} show
   */
  const showModal = (show = true) => {
    if (!show) {
      setHtml($('.mo'), '');
    }
    $('.ov').classList[show ? 'add' : 'remove']('sh');
  };

  /**
   * Reproducir sonidos con JSfxr.js
   * @param {*} params
   */
  const playSound = params => {
    if (withSounds) {
      const url = window.URL || window.webkitURL;
      try {
        const soundURL = jsfxr(params);
        const player = new Audio();
        $on(
          player,
          'error',
          () => {
            console.log('Error: ' + player.error.code);
          },
          false
        );
        player.src = soundURL;
        player.play();

        $on(
          player,
          'ended',
          () => {
            url.revokeObjectURL(soundURL);
          },
          false
        );
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  /**
   * Función principal que maneja las pantallas del juego
   * @param {*} screen
   */
  const main = (screen = 1) => {
    resetGUI();

    // Establece una transición entre ventanas...
    [...$$('.srn')].map(v =>
      v.classList[v.id.includes(screen) ? 'add' : 'remove']('sh-ani')
    );

    if (screen === 1) {
      // Renderiza el board base, donde se establece el escenario
      playOnline = playIA = false;
      actualPlayer = 0;
      room = '';
      renderBoardbase();
    } else {
      $('#f').classList.add('sh-ani');
      renderBoars();
    }
  };

  /**
   * Captura el evento del botón para generar una nueva board
   */
  $on($('#rand'), 'click', () => {
    playSound(sounds.btn);
    const { board, figures } = createBoard();
    // Carga los valores para el jugador actual...
    PLAYERS[0][0] = board;
    PLAYERS[0][1] = figures;
    updateCache(['b', 'f'], [board, figures]);
    // Renderizar de nuevo el escenario...
    renderBoardbase();
  });

  /**
   * Evento del botón de practicar VS el PC/"IA"
   */
  $on($('#vs'), 'click', () => {
    playSound(sounds.btn);
    const { board, figures } = createBoard(0);
    PLAYERS[1] = [board, figures, 0];
    $('#g2').textContent = 'Captain Bot';
    playerTurn = randomNumber(1, 2);
    playIA = true;
    main(2);
  });

  /**
   * Evento del botón de regresra al home
   */
  $on($('#bck'), 'click', () => {
    playSound(sounds.btn);
    if (playOnline) {
      modal(
        {
          em: '⚠️',
          txt: 'Attention',
          cont: 'Are you sure you want to exit?',
          catxt: 'No',
          oktxt: 'Yes'
        },
        isConfirm => {
          if (isConfirm) {
            disconnectSocket();
            main(1);
          }
        }
      );
    } else {
      main(1);
    }
  });

  /**
   * Evento del botón de compartir, sólo visible si el browser los soporta
   */
  if (supportedShare) {
    $on($('#sha'), 'click', e => {
      e.preventDefault();
      playSound(sounds.btn);
      navigator
        .share({
          title: 'Back to the BatttleShip',
          text: 'Play Back to the BatttleShip #js13k by Jorge Rubiano @ostjh',
          url: location.href
        })
        .then(() => {
          modal({
            em: '👍',
            txt: 'Thanks for sharing',
            shok: false,
            catxt: 'ok'
          });
        })
        .catch(err => {
          modal({
            em: '👎',
            txt: 'Error',
            cont: err,
            shok: false,
            catxt: 'ok'
          });
        });
    });
  }

  /**
   * Para el evento de activar o descativar los sonidos
   */
  $on($('#so'), 'click', e => {
    e.preventDefault();
    const toogleSound = !withSounds;
    updateCache(['s'], [toogleSound]);
    activeSounds(toogleSound);
  });

  /**
   * Para el evento de captura del nombre del jugador
   */
  $on($('#nm'), 'click', () => {
    const newName = sanizateTags(
      prompt('Write your name (MAX 10)', $('#nm').textContent)
    );

    if (newName) {
      const shortName =
        newName.length > 10 ? newName.substring(0, 10) + '...' : newName;
      updateCache(['n'], [shortName]);
      $('#g1').textContent = $('#nm').textContent = PLAYERS[0][2] = shortName;
    }
  });

  /**
   * Para capturar el evento de mostrar el modal de los emojis del chat
   */
  $on($('#chat'), 'click', () => {
    $('#ejs').classList[$('#ejs').classList.contains('sh') ? 'remove' : 'add'](
      'sh'
    );
  });

  /**
   * Captura el evento para iniciar una partida online
   */
  $on($('#ol'), 'click', () => {
    if (navigator.onLine && !connectedSocket) {
      playSound(sounds.sno);
      intervalSonar = setInterval(() => {
        playSound(sounds.sno);
      }, 2000);
      modal(
        {
          em: '📡',
          txt: 'Looking for an opponent...',
          cont: 'We are looking for your opponent, this may take a few seconds',
          shok: false
        },
        isConfirm => {
          clearInterval(intervalSonar);
          if (!isConfirm) {
            disconnectSocket();
          }
        }
      );

      configureSocket();
    }
  });

  $on($('#dev'), 'click', () => {
    modal(
      {
        em: '👨‍💻',
        txt: 'Back to the BatttleShip',
        cont: 'Game developed by Jorge Rubiano for the #js13k - @ostjh',
        oktxt: 'Twitter',
        catxt: 'Close'
      },
      isConfirm => {
        if (isConfirm) {
          window.open('https://twitter.com/ostjh', '_blank');
        }
      }
    );
  });

  // LOGICA RELACIONADA A LOS SOCKETS

  /**
   * Emite los datos de un ataque al socket
   */
  const emitAttack = (numPlayer, row, col) => {
    if (
      PLAYERS[numPlayer][0][row][col] === 0 ||
      PLAYERS[numPlayer][0][row][col] === 1
    ) {
      if (intervalAtack) {
        clearInterval(intervalAtack);
      }
      emitDataSocket('sA', {
        actualPlayer,
        room,
        row,
        col,
        token: PLAYERS[actualPlayer - 1][3],
        name: PLAYERS[actualPlayer - 1][2]
      });
    }
  };

  /**
   * Configura el socket
   */
  const configureSocket = () => {
    socket = io();
    connectedSocket = true;

    // Envia la data del usuario actual al server y busca un jugador
    socket.on('connect', () => {
      emitDataSocket('nU', {
        player: PLAYERS[0],
        tokenByBrowser
      });
    });

    /**
     * Evento que indica que se tiene un contrincate
     */
    socket.on('sG', data => {
      if (intervalSonar) {
        clearInterval(intervalSonar);
      }
      showModal(false);
      actualPlayer = data.p1.data[3] === PLAYERS[0][3] ? 1 : 2;
      const dataOtherPlayer = data.p1.data[3] === PLAYERS[0][3] ? 'p2' : 'p1';
      // Ocultar los barcos para el otro jugador...
      for (let i = 0; i < data[dataOtherPlayer].data[1].length; i++) {
        data[dataOtherPlayer].data[1][i][0] = 0;
      }
      PLAYERS[1] = data[dataOtherPlayer].data;
      playerTurn = actualPlayer === 1 ? data.turn : data.turn === 1 ? 2 : 1;
      room = data.room;
      $('#g1').textContent = sanizateTags(PLAYERS[0][2]);
      $('#g2').textContent = sanizateTags(PLAYERS[1][2]);
      playOnline = true;
      main(2);
    });

    /**
     * Evento que indica al jugador que esta en su misma sesión
     */
    socket.on('sP', data => {
      clearInterval(intervalSonar);
      playSound(sounds.sad);
      if (data.browser === tokenByBrowser) {
        disconnectSocket();
        modal(
          {
            em: '🤦‍️',
            txt: 'Same player',
            cont: 'Open another browser or private browsing',
            catxt: 'ok',
            shok: false
          },
          () => {
            showModal(false);
          }
        );
      }
    });

    /**
     * Evento que indica que un juador se ha desconectado
     */
    socket.on('gD', () => {
      playSound(sounds.sad);
      disconnectSocket();
      main(1);
      modal({
        em: '😭',
        txt: 'Sorry',
        cont: 'Your opponent has disconnected',
        shok: false,
        catxt: 'ok'
      });
    });

    /**
     * Evento que recibe el ataque de un jugador
     */
    socket.on('rA', data => {
      if (data.actualPlayer !== actualPlayer) {
        if (intervalAtack) {
          clearInterval(intervalAtack);
        }
        sendAttack(
          actualPlayer === 1
            ? data.actualPlayer === 1
              ? 1
              : 0
            : data.actualPlayer === 1
            ? 0
            : 1,
          data.row,
          data.col
        );
      }
    });

    /**
     * Evento que recibe el emoji enviado por un jugador
     */
    socket.on('rE', data => {
      if (data.token !== PLAYERS[0][3]) {
        showEmoji(data.emoji, 'right');
      }
    });
  };

  /**
   * Emite los evento del cliente al server
   * @param {*} name
   * @param {*} data
   */
  const emitDataSocket = (name, data) => {
    socket.emit(name, data);
  };

  /**
   * Cerrar un socket
   */
  const disconnectSocket = () => {
    if (connectedSocket) {
      connectedSocket = false;
      socket.disconnect();
    }
  };

  // Generar data inicial del juego
  let screenTwo = '';
  for (let i = 1; i <= 2; i++) {
    screenTwo += `<div class='stage'><div class='bts'>`;
    let counerFigure = 1;
    for (let c = 1, initial = MAX_FIGURES; c <= MAX_FIGURES; c++, initial--) {
      for (let d = 1; d <= c; d++) {
        screenTwo += `<div class='bt b${initial}' id='b${i}${counerFigure}'></div>`;
        counerFigure++;
      }
    }
    screenTwo += `</div><div class='brs'><canvas id='p${i}'></canvas></div><div class='gm'><h1 class='st' id='g${i}'></h1><div class='prg sc' id='pr${i}'></div></div></div>`;
  }

  setHtml($('#s2'), screenTwo);
  const canvases = ['b', 'p1', 'p2'].map(c => [
    $(`#${c}`),
    $(`#${c}`).getContext('2d')
  ]);

  for (let i = 0; i < canvases.length; i++) {
    canvases[i][0].width = CANVAS_SIZE;
    canvases[i][0].height = CANVAS_SIZE;
    canvases[i][0].style.width = CANVAS_SIZE + 'px';
    canvases[i][0].style.height = CANVAS_SIZE + 'px';
  }

  addListenerMulti(canvases[1][0], eventoCanvas, 'mousedown', 'touchstart');

  // Para generar la clase del border del juego...
  const style = document.createElement('style');
  style.type = 'text/css';
  const listPatron = [
    ['5-100', '2,0', 5],
    ['98,100', '5-100', 5],
    ['95-5', '98,100', -5],
    ['0,2', '100-5', -5]
  ];

  let stylePatron = '';
  for (let i = 0; i < listPatron.length; i++) {
    const indexRange = listPatron[i][0].includes('-') ? 0 : 1;
    const startValue = listPatron[i][indexRange].split('-');
    const commonValues = listPatron[i][indexRange === 0 ? 1 : 0].split(',');

    for (let c = 0; c < 20; c++) {
      const common = commonValues[c % 2 === 0 ? 0 : 1];
      const initialRange = +startValue[0] + c * listPatron[i][2];
      const printPatron = !(listPatron[i][2] > 0
        ? initialRange > +startValue[1]
        : initialRange < +startValue[1]);
      if (printPatron) {
        if (stylePatron !== '') {
          stylePatron += ',';
        }
        stylePatron +=
          indexRange === 0
            ? `${initialRange}% ${common}%`
            : `${common}% ${initialRange}%`;
      } else {
        break;
      }
    }
  }

  const shakeStyles = 
    '@keyframes shake {' +
    [
      '1,1,0',
      '-1,-2,-1',
      '-3,0,1',
      '3,2,0',
      '1,-1,1',
      '-1,2,-1',
      '-3,1,0',
      '3,1,-1',
      '-1,-1,1',
      '1,2,0',
      '1,-2,-1'
    ]
      .map((v, index) => {
        const splitValue = v.split(',');
        return `${index * 10}% {transform: translate(${splitValue[0]}px, ${
          splitValue[1]
        }px) rotate(${splitValue[2]}deg);}`;
      })
      .join('') + '}';

  setHtml(
    style,
    `.s {${
      isSafari ? '-webkit-' : ''
    }clip-path: polygon(0% 0%,${stylePatron})} ${shakeStyles}`
  );

  $('head').appendChild(style);

  // Para los emojis que s emostrarán en el chat...
  setHtml(
    $('#ejs'),
    emojis.map((v, ind) => `<button id='e-${ind}'>${v}</button>`).join('')
  );

  emojis.forEach((_, ind) => {
    $on($(`#e-${ind}`), 'click', e => {
      const indexEmoji = +e.target.id.split('-')[1];
      $('#ejs').classList.remove('sh');
      showEmoji(indexEmoji, 'left');

      emitDataSocket('sE', {
        room,
        emoji: indexEmoji,
        token: PLAYERS[0][3]
      });
    });
  });

  // Cargar la información base que proviene de la cache
  const cache = getCache();
  let initialValues = [];
  // No existe nada en la caché
  if (Object.keys(cache).length !== 0) {
    initialValues = [cache.b, cache.f, cache.n, cache.t, cache.s];
  } else {
    const { board, figures } = createBoard();
    initialValues = [
      board,
      figures,
      `Captain: ${randomNumber(1, 10000)}`,
      guid(),
      1
    ];
    saveCache({
      b: initialValues[0],
      f: initialValues[1],
      n: initialValues[2],
      t: initialValues[3],
      s: initialValues[4]
    });
  }

  activeSounds(initialValues[4]);
  PLAYERS[0] = initialValues;
  $('#g1').textContent = $('#nm').textContent = sanizateTags(initialValues[2]);

  // Para bloquear el botón derecho del mouse...
  $on(document, 'contextmenu', event => event.preventDefault());
  console.log(
    '%c%s',
    'color: black; font-size: 24px;',
    'Developed by Jorge Rubiano https://twitter.com/ostjh'
  );
  main(1);
})();
