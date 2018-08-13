import {ArraysUtils} from "./commons.arrays";
import {StringsUtils} from "./commons.strings";
import {ObjectsUtils} from "./commons.objects";

export const CommonsUtils: any = {};

CommonsUtils.remove = ArraysUtils.remove;
CommonsUtils.shuffle = ArraysUtils.shuffle;
CommonsUtils.sample = ArraysUtils.sample;
CommonsUtils.uniq = ArraysUtils.uniq;
CommonsUtils.compact = ArraysUtils.compact;
CommonsUtils.reverse = ArraysUtils.reverse;
CommonsUtils.union = ArraysUtils.union;
CommonsUtils.intersection = ArraysUtils.intersection;
CommonsUtils.diff = ArraysUtils.diff;
CommonsUtils.flatten = ArraysUtils.flatten;
CommonsUtils.last = ArraysUtils.last;
CommonsUtils.findIndices = ArraysUtils.findIndices;
CommonsUtils.camelCase = StringsUtils.camelCase;
CommonsUtils.pascalCase = StringsUtils.pascalCase;
CommonsUtils.titleCase = StringsUtils.titleCase;
CommonsUtils.toggleCase = StringsUtils.toggleCase;
CommonsUtils.swapCase = StringsUtils.swapCase;
CommonsUtils.dotCase = StringsUtils.dotCase;
CommonsUtils.random = StringsUtils.random;
CommonsUtils.randomColor = StringsUtils.randomColor;
CommonsUtils.guid = StringsUtils.guid;
CommonsUtils.formatCurrency = StringsUtils.formatCurrency;
CommonsUtils.isEmpty = StringsUtils.isEmpty;
CommonsUtils.isInteger = StringsUtils.isInteger;
CommonsUtils.isJsonString = StringsUtils.isJsonString;
CommonsUtils.isString = StringsUtils.isString;
CommonsUtils.removeHtmlTags = StringsUtils.removeHtmlTags;
CommonsUtils.removeObject = ObjectsUtils.remove;

