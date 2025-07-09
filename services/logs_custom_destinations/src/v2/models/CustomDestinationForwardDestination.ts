import { UnparsedObject } from "@datadog/datadog-api-client";

import { CustomDestinationForwardDestinationElasticsearch } from "./CustomDestinationForwardDestinationElasticsearch";
import { CustomDestinationForwardDestinationGoogleSecurityOperations } from "./CustomDestinationForwardDestinationGoogleSecurityOperations";
import { CustomDestinationForwardDestinationHttp } from "./CustomDestinationForwardDestinationHttp";
import { CustomDestinationForwardDestinationMicrosoftSentinel } from "./CustomDestinationForwardDestinationMicrosoftSentinel";
import { CustomDestinationForwardDestinationSplunk } from "./CustomDestinationForwardDestinationSplunk";

/**
 * A custom destination's location to forward logs.
 */
export type CustomDestinationForwardDestination =
  | CustomDestinationForwardDestinationHttp
  | CustomDestinationForwardDestinationSplunk
  | CustomDestinationForwardDestinationElasticsearch
  | CustomDestinationForwardDestinationMicrosoftSentinel
  | CustomDestinationForwardDestinationGoogleSecurityOperations
  | UnparsedObject;
