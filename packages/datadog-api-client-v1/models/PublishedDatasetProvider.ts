/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Product page that published the dataset queried by a `DatasetListQuery`. `ddsql_query` is the only provider currently supported for host map widgets.
 */

export type PublishedDatasetProvider = typeof DDSQL_QUERY | UnparsedObject;
export const DDSQL_QUERY = "ddsql_query";
