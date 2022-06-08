/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricDistinctVolume } from "./MetricDistinctVolume";
import { MetricIngestedIndexedVolume } from "./MetricIngestedIndexedVolume";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Possible response objects for a metric's volume.
 */

export type MetricVolumes =
  | MetricDistinctVolume
  | MetricIngestedIndexedVolume
  | UnparsedObject;
