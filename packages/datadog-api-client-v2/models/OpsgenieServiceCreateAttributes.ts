/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceRegionType } from "./OpsgenieServiceRegionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Opsgenie service attributes for a create request.
 */
export class OpsgenieServiceCreateAttributes {
  /**
   * The custom URL for a custom region.
   */
  "customUrl"?: string;
  /**
   * The name for the Opsgenie service.
   */
  "name": string;
  /**
   * The Opsgenie API key for your Opsgenie service.
   */
  "opsgenieApiKey": string;
  /**
   * The region for the Opsgenie service.
   */
  "region": OpsgenieServiceRegionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customUrl: {
      baseName: "custom_url",
      type: "string",
    },
    name: {
      type: "string",
      required: true,
    },
    opsgenieApiKey: {
      baseName: "opsgenie_api_key",
      type: "string",
      required: true,
    },
    region: {
      type: "OpsgenieServiceRegionType",
      required: true,
    },
  };
}
