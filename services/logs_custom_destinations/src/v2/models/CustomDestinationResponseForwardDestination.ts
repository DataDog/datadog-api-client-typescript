import { UnparsedObject } from "@datadog/datadog-api-client";

import { CustomDestinationResponseForwardDestinationElasticsearch } from "./CustomDestinationResponseForwardDestinationElasticsearch";
import { CustomDestinationResponseForwardDestinationGoogleSecurityOperations } from "./CustomDestinationResponseForwardDestinationGoogleSecurityOperations";
import { CustomDestinationResponseForwardDestinationHttp } from "./CustomDestinationResponseForwardDestinationHttp";
import { CustomDestinationResponseForwardDestinationMicrosoftSentinel } from "./CustomDestinationResponseForwardDestinationMicrosoftSentinel";
import { CustomDestinationResponseForwardDestinationSplunk } from "./CustomDestinationResponseForwardDestinationSplunk";

/**
 * A custom destination's location to forward logs.
 */
export type CustomDestinationResponseForwardDestination =
  | CustomDestinationResponseForwardDestinationHttp
  | CustomDestinationResponseForwardDestinationSplunk
  | CustomDestinationResponseForwardDestinationElasticsearch
  | CustomDestinationResponseForwardDestinationMicrosoftSentinel
  | CustomDestinationResponseForwardDestinationGoogleSecurityOperations
  | UnparsedObject;
