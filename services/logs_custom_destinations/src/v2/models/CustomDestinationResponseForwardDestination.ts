import { UnparsedObject } from "@datadog/datadog-api-client";

import { CustomDestinationResponseForwardDestinationElasticsearch } from "./CustomDestinationResponseForwardDestinationElasticsearch";
import { CustomDestinationResponseForwardDestinationHttp } from "./CustomDestinationResponseForwardDestinationHttp";
import { CustomDestinationResponseForwardDestinationSplunk } from "./CustomDestinationResponseForwardDestinationSplunk";

/**
 * A custom destination's location to forward logs.
 */
export type CustomDestinationResponseForwardDestination =
  | CustomDestinationResponseForwardDestinationHttp
  | CustomDestinationResponseForwardDestinationSplunk
  | CustomDestinationResponseForwardDestinationElasticsearch
  | UnparsedObject;
