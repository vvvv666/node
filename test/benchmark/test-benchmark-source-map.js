'use strict';

require('../common');

const runBenchmark = require('../common/benchmark');

runBenchmark('source_map', { NODEJS_BENCHMARK_ZERO_ALLOWED: 1 });
