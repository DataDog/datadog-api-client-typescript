/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetConfigFileSchemaV2 } from "./FleetConfigFileSchemaV2";
import { FleetIntegrationSchemaDetailV2 } from "./FleetIntegrationSchemaDetailV2";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The schema resolved for the requested configuration file.
 */

export type FleetConfigFileSchemaV2ResponseData =
  | FleetIntegrationSchemaDetailV2
  | FleetConfigFileSchemaV2
  | UnparsedObject;
