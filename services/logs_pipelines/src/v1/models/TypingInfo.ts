import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { LogsAPIError } from "./LogsAPIError";
import { LogsAPIErrorResponse } from "./LogsAPIErrorResponse";
import { LogsArithmeticProcessor } from "./LogsArithmeticProcessor";
import { LogsArrayProcessor } from "./LogsArrayProcessor";
import { LogsArrayProcessorOperationAppend } from "./LogsArrayProcessorOperationAppend";
import { LogsArrayProcessorOperationLength } from "./LogsArrayProcessorOperationLength";
import { LogsArrayProcessorOperationSelect } from "./LogsArrayProcessorOperationSelect";
import { LogsAttributeRemapper } from "./LogsAttributeRemapper";
import { LogsCategoryProcessor } from "./LogsCategoryProcessor";
import { LogsCategoryProcessorCategory } from "./LogsCategoryProcessorCategory";
import { LogsDateRemapper } from "./LogsDateRemapper";
import { LogsDecoderProcessor } from "./LogsDecoderProcessor";
import { LogsFilter } from "./LogsFilter";
import { LogsGeoIPParser } from "./LogsGeoIPParser";
import { LogsGrokParser } from "./LogsGrokParser";
import { LogsGrokParserRules } from "./LogsGrokParserRules";
import { LogsLookupProcessor } from "./LogsLookupProcessor";
import { LogsMessageRemapper } from "./LogsMessageRemapper";
import { LogsPipeline } from "./LogsPipeline";
import { LogsPipelineProcessor } from "./LogsPipelineProcessor";
import { LogsPipelinesOrder } from "./LogsPipelinesOrder";
import { LogsSchemaCategoryMapper } from "./LogsSchemaCategoryMapper";
import { LogsSchemaCategoryMapperCategory } from "./LogsSchemaCategoryMapperCategory";
import { LogsSchemaCategoryMapperFallback } from "./LogsSchemaCategoryMapperFallback";
import { LogsSchemaCategoryMapperTargets } from "./LogsSchemaCategoryMapperTargets";
import { LogsSchemaData } from "./LogsSchemaData";
import { LogsSchemaProcessor } from "./LogsSchemaProcessor";
import { LogsSchemaRemapper } from "./LogsSchemaRemapper";
import { LogsServiceRemapper } from "./LogsServiceRemapper";
import { LogsSpanRemapper } from "./LogsSpanRemapper";
import { LogsStatusRemapper } from "./LogsStatusRemapper";
import { LogsStringBuilderProcessor } from "./LogsStringBuilderProcessor";
import { LogsTraceRemapper } from "./LogsTraceRemapper";
import { LogsURLParser } from "./LogsURLParser";
import { LogsUserAgentParser } from "./LogsUserAgentParser";
import { ReferenceTableLogsLookupProcessor } from "./ReferenceTableLogsLookupProcessor";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    LogsArithmeticProcessorType: ["arithmetic-processor"],
    LogsArrayProcessorOperationAppendType: ["append"],
    LogsArrayProcessorOperationLengthType: ["length"],
    LogsArrayProcessorOperationSelectType: ["select"],
    LogsArrayProcessorType: ["array-processor"],
    LogsAttributeRemapperType: ["attribute-remapper"],
    LogsCategoryProcessorType: ["category-processor"],
    LogsDateRemapperType: ["date-remapper"],
    LogsDecoderProcessorBinaryToTextEncoding: ["base64", "base16"],
    LogsDecoderProcessorInputRepresentation: ["utf_8", "integer"],
    LogsDecoderProcessorType: ["decoder-processor"],
    LogsGeoIPParserType: ["geo-ip-parser"],
    LogsGrokParserType: ["grok-parser"],
    LogsLookupProcessorType: ["lookup-processor"],
    LogsMessageRemapperType: ["message-remapper"],
    LogsPipelineProcessorType: ["pipeline"],
    LogsSchemaCategoryMapperType: ["schema-category-mapper"],
    LogsSchemaProcessorType: ["schema-processor"],
    LogsSchemaRemapperType: ["schema-remapper"],
    LogsServiceRemapperType: ["service-remapper"],
    LogsSpanRemapperType: ["span-id-remapper"],
    LogsStatusRemapperType: ["status-remapper"],
    LogsStringBuilderProcessorType: ["string-builder-processor"],
    LogsTraceRemapperType: ["trace-id-remapper"],
    LogsURLParserType: ["url-parser"],
    LogsUserAgentParserType: ["user-agent-parser"],
    TargetFormatType: ["auto", "string", "integer", "double"],
  },
  oneOfMap: {
    LogsArrayProcessorOperation: [
      "LogsArrayProcessorOperationAppend",
      "LogsArrayProcessorOperationLength",
      "LogsArrayProcessorOperationSelect",
    ],
    LogsProcessor: [
      "LogsGrokParser",
      "LogsDateRemapper",
      "LogsStatusRemapper",
      "LogsServiceRemapper",
      "LogsMessageRemapper",
      "LogsAttributeRemapper",
      "LogsURLParser",
      "LogsUserAgentParser",
      "LogsCategoryProcessor",
      "LogsArithmeticProcessor",
      "LogsStringBuilderProcessor",
      "LogsPipelineProcessor",
      "LogsGeoIPParser",
      "LogsLookupProcessor",
      "ReferenceTableLogsLookupProcessor",
      "LogsTraceRemapper",
      "LogsSpanRemapper",
      "LogsArrayProcessor",
      "LogsDecoderProcessor",
      "LogsSchemaProcessor",
    ],
    LogsSchemaMapper: ["LogsSchemaRemapper", "LogsSchemaCategoryMapper"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    LogsAPIError: LogsAPIError,
    LogsAPIErrorResponse: LogsAPIErrorResponse,
    LogsArithmeticProcessor: LogsArithmeticProcessor,
    LogsArrayProcessor: LogsArrayProcessor,
    LogsArrayProcessorOperationAppend: LogsArrayProcessorOperationAppend,
    LogsArrayProcessorOperationLength: LogsArrayProcessorOperationLength,
    LogsArrayProcessorOperationSelect: LogsArrayProcessorOperationSelect,
    LogsAttributeRemapper: LogsAttributeRemapper,
    LogsCategoryProcessor: LogsCategoryProcessor,
    LogsCategoryProcessorCategory: LogsCategoryProcessorCategory,
    LogsDateRemapper: LogsDateRemapper,
    LogsDecoderProcessor: LogsDecoderProcessor,
    LogsFilter: LogsFilter,
    LogsGeoIPParser: LogsGeoIPParser,
    LogsGrokParser: LogsGrokParser,
    LogsGrokParserRules: LogsGrokParserRules,
    LogsLookupProcessor: LogsLookupProcessor,
    LogsMessageRemapper: LogsMessageRemapper,
    LogsPipeline: LogsPipeline,
    LogsPipelineProcessor: LogsPipelineProcessor,
    LogsPipelinesOrder: LogsPipelinesOrder,
    LogsSchemaCategoryMapper: LogsSchemaCategoryMapper,
    LogsSchemaCategoryMapperCategory: LogsSchemaCategoryMapperCategory,
    LogsSchemaCategoryMapperFallback: LogsSchemaCategoryMapperFallback,
    LogsSchemaCategoryMapperTargets: LogsSchemaCategoryMapperTargets,
    LogsSchemaData: LogsSchemaData,
    LogsSchemaProcessor: LogsSchemaProcessor,
    LogsSchemaRemapper: LogsSchemaRemapper,
    LogsServiceRemapper: LogsServiceRemapper,
    LogsSpanRemapper: LogsSpanRemapper,
    LogsStatusRemapper: LogsStatusRemapper,
    LogsStringBuilderProcessor: LogsStringBuilderProcessor,
    LogsTraceRemapper: LogsTraceRemapper,
    LogsURLParser: LogsURLParser,
    LogsUserAgentParser: LogsUserAgentParser,
    ReferenceTableLogsLookupProcessor: ReferenceTableLogsLookupProcessor,
  },
};
