#!/bin/bash
set -euo pipefail

## Set debug mode (verbose and xtrace)
"${DEBUG:-false}" && set -vx
export PS4="+(${BASH_SOURCE}:${LINENO}): ${FUNCNAME[0]:+${FUNCNAME[0]}(): }"

## Run commands
npm run lint-check-rules
