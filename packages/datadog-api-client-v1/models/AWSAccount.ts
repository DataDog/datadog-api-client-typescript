/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Returns the AWS account associated with this integration.
 */
export class AWSAccount {
  /**
   * Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.
   */
  "accessKeyId"?: string;
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * An object, (in the form `{"namespace1":true/false, "namespace2":true/false}`), that enables or disables metric collection for specific AWS namespaces for this AWS account only.
   */
  "accountSpecificNamespaceRules"?: { [key: string]: boolean };
  /**
   * Whether Datadog collects cloud security posture management resources from your AWS account. This includes additional resources not covered under the general `resource_collection`.
   */
  "cspmResourceCollectionEnabled"?: boolean;
  /**
   * An array of AWS regions to exclude from metrics collection.
   */
  "excludedRegions"?: Array<string>;
  /**
   * The array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. For example, `env:production,instance-type:c1.*,!region:us-east-1`
   */
  "filterTags"?: Array<string>;
  /**
   * Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.
   */
  "hostTags"?: Array<string>;
  /**
   * Whether Datadog collects metrics for this AWS account.
   */
  "metricsCollectionEnabled"?: boolean;
  /**
   * Whether Datadog collects a standard set of resources from your AWS account.
   */
  "resourceCollectionEnabled"?: boolean;
  /**
   * Your Datadog role delegation name.
   */
  "roleName"?: string;
  /**
   * Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.
   */
  "secretAccessKey"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessKeyId: {
      baseName: "access_key_id",
      type: "string",
    },
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    accountSpecificNamespaceRules: {
      baseName: "account_specific_namespace_rules",
      type: "{ [key: string]: boolean; }",
    },
    cspmResourceCollectionEnabled: {
      baseName: "cspm_resource_collection_enabled",
      type: "boolean",
    },
    excludedRegions: {
      baseName: "excluded_regions",
      type: "Array<string>",
    },
    filterTags: {
      baseName: "filter_tags",
      type: "Array<string>",
    },
    hostTags: {
      baseName: "host_tags",
      type: "Array<string>",
    },
    metricsCollectionEnabled: {
      baseName: "metrics_collection_enabled",
      type: "boolean",
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
    },
    roleName: {
      baseName: "role_name",
      type: "string",
    },
    secretAccessKey: {
      baseName: "secret_access_key",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSAccount.attributeTypeMap;
  }

  public constructor() {}
}
