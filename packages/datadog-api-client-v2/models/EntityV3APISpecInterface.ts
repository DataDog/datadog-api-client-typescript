/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3APISpecInterfaceDefinition } from "./EntityV3APISpecInterfaceDefinition";
import { EntityV3APISpecInterfaceFileRef } from "./EntityV3APISpecInterfaceFileRef";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The API definition.
 */

export type EntityV3APISpecInterface =
  | EntityV3APISpecInterfaceFileRef
  | EntityV3APISpecInterfaceDefinition
  | UnparsedObject;
