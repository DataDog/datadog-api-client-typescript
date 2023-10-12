/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImage } from "./ContainerImage";
import { ContainerImageGroup } from "./ContainerImageGroup";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Possible Container Image models.
 */

export type ContainerImageItem =
  | ContainerImage
  | ContainerImageGroup
  | UnparsedObject;
