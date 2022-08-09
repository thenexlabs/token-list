import fs from 'fs';
import path from 'path';
import { getAddress } from '@ethersproject/address';
import { request, gql } from 'graphql-request';
import slugify from 'slugify';

var name$3 = "NexDex Default";
var timestamp$3 = "2022-08-06T14:15:03Z";
var version$3 = {
	major: 0,
	minor: 1,
	patch: 0
};
var logoURI$3 = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png";
var keywords$3 = [
	"nexdex",
	"thenex",
	"default"
];
var tokens$3 = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];
var defaultList = {
	name: name$3,
	timestamp: timestamp$3,
	version: version$3,
	logoURI: logoURI$3,
	keywords: keywords$3,
	tokens: tokens$3
};

var name$2 = "NexDex Extended";
var timestamp$2 = "2022-08-06T14:15:03Z";
var version$2 = {
	major: 0,
	minor: 1,
	patch: 0
};
var logoURI$2 = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png";
var keywords$2 = [
	"nexdex",
	"thenex",
	"extended"
];
var tokens$2 = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];
var extendedtList = {
	name: name$2,
	timestamp: timestamp$2,
	version: version$2,
	logoURI: logoURI$2,
	keywords: keywords$2,
	tokens: tokens$2
};

var name$1 = "NexDex Top 15";
var timestamp$1 = "2022-08-06T14:15:03Z";
var version$1 = {
	major: 0,
	minor: 1,
	patch: 0
};
var logoURI$1 = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png";
var keywords$1 = [
	"nexdex",
	"thenex",
	"top 15"
];
var tokens$1 = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];
var top15List = {
	name: name$1,
	timestamp: timestamp$1,
	version: version$1,
	logoURI: logoURI$1,
	keywords: keywords$1,
	tokens: tokens$1
};

var name = "NexDex Top 100";
var timestamp = "2022-08-06T14:15:03Z";
var version = {
	major: 0,
	minor: 1,
	patch: 0
};
var logoURI = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png";
var keywords = [
	"nexdex",
	"thenex",
	"top 100"
];
var tokens = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];
var top100tList = {
	name: name,
	timestamp: timestamp,
	version: version,
	logoURI: logoURI,
	keywords: keywords,
	tokens: tokens
};

var srcDefault = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];

var srcExtended = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];

var srcTop100 = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];

var srcTop15 = [
	{
		name: "WAVAX Token",
		symbol: "WAVAX",
		address: "0xa24D403B17A120392dC4B512867B7D4810A7e211",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0xa24D403B17A120392dC4B512867B7D4810A7e211.png"
	},
	{
		name: "Experience Token",
		symbol: "XP",
		address: "0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x652d6b59aF6e0eC41bEDd99e7Ea11C0f0B77b945.png"
	},
	{
		name: "USDC",
		symbol: "USDC",
		address: "0x0E8c253b6cf6101411322f742791976dA487B2DC",
		chainId: 43113,
		decimals: 18,
		logoURI: "https://tokens.thenex.world/images/0x0E8c253b6cf6101411322f742791976dA487B2DC.png"
	}
];

var VersionBump;
(function (VersionBump) {
    VersionBump["major"] = "major";
    VersionBump["minor"] = "minor";
    VersionBump["patch"] = "patch";
})(VersionBump || (VersionBump = {}));
var lists$2 = {
    "nexdex-default": {
        list: srcDefault,
        name: "NexDex Default",
        keywords: ["nexdex", "thenex", "default"],
        logoURI: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
        sort: false,
        currentVersion: version$3,
    },
    "nexdex-extended": {
        list: srcExtended,
        name: "NexDex Extended",
        keywords: ["nexdex", "thenex", "extended"],
        logoURI: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
        sort: true,
        currentVersion: version$2,
    },
    "nexdex-top-100": {
        list: srcTop100,
        name: "NexDex Top 100",
        keywords: ["nexdex", "thenex", "top 100"],
        logoURI: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
        sort: true,
        currentVersion: version,
    },
    "nexdex-top-15": {
        list: srcTop15,
        name: "NexDex Top 15",
        keywords: ["nexdex", "thenex", "top 15"],
        logoURI: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
        sort: true,
        currentVersion: version$1,
    },
};
var getNextVersion = function (currentVersion, versionBump) {
    var major = currentVersion.major, minor = currentVersion.minor, patch = currentVersion.patch;
    switch (versionBump) {
        case VersionBump.major:
            return { major: major + 1, minor: minor, patch: patch };
        case VersionBump.minor:
            return { major: major, minor: minor + 1, patch: patch };
        case VersionBump.patch:
        default:
            return { major: major, minor: minor, patch: patch + 1 };
    }
};
var buildList = function (listName, versionBump) {
    var _a = lists$2[listName], list = _a.list, name = _a.name, keywords = _a.keywords, logoURI = _a.logoURI, sort = _a.sort, currentVersion = _a.currentVersion;
    var version = getNextVersion(currentVersion, versionBump);
    return {
        name: name,
        timestamp: new Date().toISOString(),
        version: version,
        logoURI: logoURI,
        keywords: keywords,
        // sort them by symbol for easy readability (not applied to default list)
        tokens: sort
            ? list.sort(function (t1, t2) {
                if (t1.chainId === t2.chainId) {
                    // XP first in extended list
                    if ((t1.symbol === "XP") !== (t2.symbol === "XP")) {
                        return t1.symbol === "XP" ? -1 : 1;
                    }
                    return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
                }
                return t1.chainId < t2.chainId ? -1 : 1;
            })
            : list,
    };
};
var saveList = function (tokenList, listName) {
    var tokenListPath = "".concat(path.resolve(), "/lists/").concat(listName, ".json");
    var stringifiedList = JSON.stringify(tokenList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Token list saved to ", tokenListPath);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var lists$1 = {
    "nex-default": srcDefault,
    "nex-extended": srcExtended,
    "nex-top-100": srcTop100,
    "nex-top-15": srcTop15
};
var checksumAddresses = function (listName) {
    var badChecksumCount = 0;
    var listToChecksum = lists$1[listName];
    var updatedList = listToChecksum.reduce(function (tokenList, token) {
        var checksummedAddress = getAddress(token.address);
        if (checksummedAddress !== token.address) {
            badChecksumCount += 1;
            var updatedToken = __assign(__assign({}, token), { address: checksummedAddress });
            return __spreadArray(__spreadArray([], tokenList, true), [updatedToken], false);
        }
        return __spreadArray(__spreadArray([], tokenList, true), [token], false);
    }, []);
    if (badChecksumCount > 0) {
        console.info("Found and fixed ".concat(badChecksumCount, " non-checksummed addreses"));
        var tokenListPath = "".concat(path.resolve(), "/src/tokens/").concat(listName, ".json");
        console.info("Saving updated list to ", tokenListPath);
        var stringifiedList = JSON.stringify(updatedList, null, 2);
        fs.writeFileSync(tokenListPath, stringifiedList);
        console.info("Checksumming done!");
    }
    else {
        console.info("All addresses are already checksummed");
    }
};

var lists = [
    {
        name: "nexdex-default",
        src: srcDefault,
        actual: defaultList,
    },
    {
        name: "nexdex-extended",
        src: srcExtended,
        actual: extendedtList,
    },
    {
        name: "nexdex-top-15",
        src: srcTop15,
        actual: top15List,
    },
    {
        name: "nexdex-top-100",
        src: srcTop100,
        actual: top100tList,
    },
];
var compareLists = function (listPair) {
    var name = listPair.name, src = listPair.src, actual = listPair.actual;
    if (src.length !== actual.tokens.length) {
        throw Error("List ".concat(name, " seems to be not properly regenerated. Soure file has ").concat(src.length, " tokens but actual list has ").concat(actual.tokens.length, ". Did you forget to run yarn makelist?"));
    }
    src.sort(function (t1, t2) { return (t1.address < t2.address ? -1 : 1); });
    actual.tokens.sort(function (t1, t2) { return (t1.address < t2.address ? -1 : 1); });
    src.forEach(function (srcToken, index) {
        if (JSON.stringify(srcToken) !== JSON.stringify(actual.tokens[index])) {
            throw Error("List ".concat(name, " seems to be not properly regenerated. Tokens from src/tokens directory don't match up with the final list. Did you forget to run yarn makelist?"));
        }
    });
};
/**
 * Check in CI that author properly updated token list
 * i.e. not just changed token list in src/tokens but also regenerated lists with yarn makelist command.
 * Github Action runs only on change in src/tokens directory.
 */
var ciCheck = function () {
    lists.forEach(function (listPair) {
        compareLists(listPair);
    });
};

var pathToImages = process.env.CI
    ? path.join(process.env.GITHUB_WORKSPACE, "packages", "token-lists", "lists", "images")
    : path.join(path.resolve(), "lists", "images");
var logoFiles = fs.readdirSync(pathToImages);
// Default token list for exchange + manual exclusion of broken BEP-20 token(s)
var blacklist = [
// List of default tokens to exclude
// "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // WBNB
// "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", // CAKE
// "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
// "0x55d398326f99059fF775485246999027B3197955", // USDT
// "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", // BTCB
// "0x2170ed0880ac9a755fd29b2688956bd959f933f8", // ETH
// "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51", // BUNNY
// "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63", // XVS
// "0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3", // SAFEMOON
// "0x8f0528ce5ef7b51152a59745befdd91d97091d2f", // ALPACA
// "0x7083609fce4d1d8dc0c979aab8c869ea2c873402", // DOT
// "0x4e6415a5727ea08aae4580057187923aec331227", // FINE
// "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", // DAI
// "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDC
// "0x844fa82f1e54824655470970f7004dd90546bb28", // DOP
// List of broken tokens
// "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b",
// "0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea",
];
/**
 * Return today / 1 month ago ISO-8601 DateTime.
 *
 * @returns string[]
 */
var getDateRange = function () {
    var today = new Date();
    var todayISO = today.toISOString();
    today.setMonth(today.getMonth() - 1);
    var monthAgoISO = today.toISOString();
    return [todayISO, monthAgoISO];
};
/**
 * Fetch Top100 Tokens traded on PancakeSwap v2, ordered by trading volume,
 * for the past 30 days, filtered to remove default / broken tokens.
 *
 * @returns BitqueryEntity[]]
 */
var getTokens = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, today, monthAgo, ethereum, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = getDateRange(), today = _a[0], monthAgo = _a[1];
                return [4 /*yield*/, request("https://graphql.bitquery.io/", gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query ($from: ISO8601DateTime, $till: ISO8601DateTime, $blacklist: [String!]) {\n          ethereum(network: bsc) {\n            dexTrades(\n              options: { desc: \"Total_USD\", limit: 100 }\n              exchangeName: { is: \"NexDex v1\" }\n              baseCurrency: { notIn: $blacklist }\n              date: { since: $from, till: $till }\n            ) {\n              Total_USD: tradeAmount(calculate: sum, in: USD)\n              baseCurrency {\n                address\n                name\n                symbol\n                decimals\n              }\n            }\n          }\n        }\n      "], ["\n        query ($from: ISO8601DateTime, $till: ISO8601DateTime, $blacklist: [String!]) {\n          ethereum(network: bsc) {\n            dexTrades(\n              options: { desc: \"Total_USD\", limit: 100 }\n              exchangeName: { is: \"NexDex v1\" }\n              baseCurrency: { notIn: $blacklist }\n              date: { since: $from, till: $till }\n            ) {\n              Total_USD: tradeAmount(calculate: sum, in: USD)\n              baseCurrency {\n                address\n                name\n                symbol\n                decimals\n              }\n            }\n          }\n        }\n      "]))), {
                        from: monthAgo,
                        till: today,
                        blacklist: blacklist,
                    })];
            case 1:
                ethereum = (_b.sent()).ethereum;
                return [2 /*return*/, ethereum.dexTrades];
            case 2:
                error_1 = _b.sent();
                return [2 /*return*/, error_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * Returns the URI of a token logo
 * Note: If present in extended list, use main logo, else fallback to TrustWallet
 *
 * @returns string
 */
var getTokenLogo = function (address) {
    // Note: fs.existsSync can't be used here because its not case sensetive
    if (logoFiles.includes("".concat(address, ".png"))) {
        return "https://tokens.thenex.world/images/".concat(address, ".png");
    }
    return "https://assets.trustwalletapp.com/blockchains/smartchain/assets/".concat(address, "/logo.png");
};
/**
 * Main function.
 * Fetch tokems, build list, save list.
 */
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, sanitizedTokens, tokenListPath, stringifiedList, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getTokens()];
            case 1:
                tokens = _a.sent();
                sanitizedTokens = tokens.reduce(function (list, item) {
                    var checksummedAddress = getAddress(item.baseCurrency.address);
                    var updatedToken = {
                        name: slugify(item.baseCurrency.name, {
                            replacement: " ",
                            remove: /[^\w\s.]/g,
                        }),
                        symbol: slugify(item.baseCurrency.symbol, {
                            replacement: "-",
                            remove: /[^\w\s.]/g,
                        }).toUpperCase(),
                        address: checksummedAddress,
                        chainId: 43113,
                        decimals: item.baseCurrency.decimals,
                        logoURI: getTokenLogo(checksummedAddress),
                    };
                    return __spreadArray(__spreadArray([], list, true), [updatedToken], false);
                }, []);
                tokenListPath = "".concat(path.resolve(), "/src/tokens/nex-top-100.json");
                console.info("Saving updated list to ", tokenListPath);
                stringifiedList = JSON.stringify(sanitizedTokens, null, 2);
                fs.writeFileSync(tokenListPath, stringifiedList);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error when fetching Top100 Tokens by volume for the past 30 days, error: ".concat(error_2.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var templateObject_1;

var command = process.argv[2];
var listName = process.argv[3];
var versionBump = process.argv[4];
switch (command) {
    case "checksum":
        checksumAddresses(listName);
        break;
    case "generate":
        saveList(buildList(listName, versionBump), listName);
        break;
    case "fetch":
        main();
        break;
    case "ci-check":
        ciCheck();
        break;
    default:
        console.info("Unknown command");
        break;
}
