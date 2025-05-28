/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseIncludedIncident } from "./EntityResponseIncludedIncident";
import { EntityResponseIncludedOncall } from "./EntityResponseIncludedOncall";
import { EntityResponseIncludedRawSchema } from "./EntityResponseIncludedRawSchema";
import { EntityResponseIncludedRelatedEntity } from "./EntityResponseIncludedRelatedEntity";
import { EntityResponseIncludedSchema } from "./EntityResponseIncludedSchema";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * List entity response included item.
*/

export type ListEntityCatalogResponseIncludedItem = EntityResponseIncludedSchema | EntityResponseIncludedRawSchema | EntityResponseIncludedRelatedEntity | EntityResponseIncludedOncall | EntityResponseIncludedIncident | UnparsedObject;