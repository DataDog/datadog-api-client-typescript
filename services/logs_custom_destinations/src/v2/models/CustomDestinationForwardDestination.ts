import { UnparsedObject } from "@datadog/datadog-api-client";

import { CustomDestinationForwardDestinationElasticsearch } from "./CustomDestinationForwardDestinationElasticsearch";
import { CustomDestinationForwardDestinationHttp } from "./CustomDestinationForwardDestinationHttp";
import { CustomDestinationForwardDestinationSplunk } from "./CustomDestinationForwardDestinationSplunk";

/**
 * A custom destination's location to forward logs.
 */
export type CustomDestinationForwardDestination =
  | CustomDestinationForwardDestinationHttp
  | CustomDestinationForwardDestinationSplunk
  | CustomDestinationForwardDestinationElasticsearch
  | UnparsedObject;
