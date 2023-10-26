/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSEventBridgeSource } from "./AWSEventBridgeSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The EventBridge configuration for one AWS account.
 */
export class AWSEventBridgeAccountConfiguration {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * Array of AWS event sources associated with this account.
   */
  "eventHubs"?: Array<AWSEventBridgeSource>;
  /**
   * Array of tags (in the form `key:value`) which are added to all hosts
   * and metrics reporting through the main AWS integration.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountId: {
      baseName: "accountId",
      type: "string",
    },
    eventHubs: {
      baseName: "eventHubs",
      type: "Array<AWSEventBridgeSource>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSEventBridgeAccountConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
