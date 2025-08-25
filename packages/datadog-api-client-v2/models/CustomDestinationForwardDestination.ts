/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationForwardDestinationElasticsearch } from "./CustomDestinationForwardDestinationElasticsearch";
import { CustomDestinationForwardDestinationHttp } from "./CustomDestinationForwardDestinationHttp";
import { CustomDestinationForwardDestinationMicrosoftSentinel } from "./CustomDestinationForwardDestinationMicrosoftSentinel";
import { CustomDestinationForwardDestinationSplunk } from "./CustomDestinationForwardDestinationSplunk";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A custom destination's location to forward logs.
 */

export type CustomDestinationForwardDestination =
  | CustomDestinationForwardDestinationHttp
  | CustomDestinationForwardDestinationSplunk
  | CustomDestinationForwardDestinationElasticsearch
  | CustomDestinationForwardDestinationMicrosoftSentinel
  | UnparsedObject;
