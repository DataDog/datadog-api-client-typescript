/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Container } from "./Container";
import { ContainerGroup } from "./ContainerGroup";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Possible Container models.
 */

export type ContainerItem = Container | ContainerGroup | UnparsedObject;
