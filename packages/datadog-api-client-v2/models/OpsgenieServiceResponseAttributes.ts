/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceRegionType } from "./OpsgenieServiceRegionType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The attributes from an Opsgenie service response.
 */
export class OpsgenieServiceResponseAttributes {
  /**
   * The custom URL for a custom region.
   */
  "customUrl"?: string;
  /**
   * The name for the Opsgenie service.
   */
  "name"?: string;
  /**
   * The region for the Opsgenie service.
   */
  "region"?: OpsgenieServiceRegionType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customUrl: {
      baseName: "custom_url",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "OpsgenieServiceRegionType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpsgenieServiceResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
