import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsArithmeticProcessor } from "./LogsArithmeticProcessor";
import { LogsAttributeRemapper } from "./LogsAttributeRemapper";
import { LogsCategoryProcessor } from "./LogsCategoryProcessor";
import { LogsDateRemapper } from "./LogsDateRemapper";
import { LogsGeoIPParser } from "./LogsGeoIPParser";
import { LogsGrokParser } from "./LogsGrokParser";
import { LogsLookupProcessor } from "./LogsLookupProcessor";
import { LogsMessageRemapper } from "./LogsMessageRemapper";
import { LogsPipelineProcessor } from "./LogsPipelineProcessor";
import { LogsServiceRemapper } from "./LogsServiceRemapper";
import { LogsSpanRemapper } from "./LogsSpanRemapper";
import { LogsStatusRemapper } from "./LogsStatusRemapper";
import { LogsStringBuilderProcessor } from "./LogsStringBuilderProcessor";
import { LogsTraceRemapper } from "./LogsTraceRemapper";
import { LogsURLParser } from "./LogsURLParser";
import { LogsUserAgentParser } from "./LogsUserAgentParser";
import { ReferenceTableLogsLookupProcessor } from "./ReferenceTableLogsLookupProcessor";

/**
 * Definition of a logs processor.
 */
export type LogsProcessor =
  | LogsGrokParser
  | LogsDateRemapper
  | LogsStatusRemapper
  | LogsServiceRemapper
  | LogsMessageRemapper
  | LogsAttributeRemapper
  | LogsURLParser
  | LogsUserAgentParser
  | LogsCategoryProcessor
  | LogsArithmeticProcessor
  | LogsStringBuilderProcessor
  | LogsPipelineProcessor
  | LogsGeoIPParser
  | LogsLookupProcessor
  | ReferenceTableLogsLookupProcessor
  | LogsTraceRemapper
  | LogsSpanRemapper
  | UnparsedObject;
