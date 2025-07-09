/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationResponseForwardDestinationElasticsearch } from "./CustomDestinationResponseForwardDestinationElasticsearch";
import { CustomDestinationResponseForwardDestinationGoogleSecurityOperations } from "./CustomDestinationResponseForwardDestinationGoogleSecurityOperations";
import { CustomDestinationResponseForwardDestinationHttp } from "./CustomDestinationResponseForwardDestinationHttp";
import { CustomDestinationResponseForwardDestinationMicrosoftSentinel } from "./CustomDestinationResponseForwardDestinationMicrosoftSentinel";
import { CustomDestinationResponseForwardDestinationSplunk } from "./CustomDestinationResponseForwardDestinationSplunk";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
