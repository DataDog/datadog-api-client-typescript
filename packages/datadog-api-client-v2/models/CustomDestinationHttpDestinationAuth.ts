/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationHttpDestinationAuthBasic } from "./CustomDestinationHttpDestinationAuthBasic";
import { CustomDestinationHttpDestinationAuthCustomHeader } from "./CustomDestinationHttpDestinationAuthCustomHeader";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication method of the HTTP requests.
 */

export type CustomDestinationHttpDestinationAuth =
  | CustomDestinationHttpDestinationAuthBasic
  | CustomDestinationHttpDestinationAuthCustomHeader
  | UnparsedObject;
